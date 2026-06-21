import google.generativeai as genai
import os
import json
import time
import threading
from concurrent.futures import ThreadPoolExecutor

# Configure API
api_key = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=api_key)

# Models list to rotate and fall back
AVAILABLE_MODELS = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-3.5-flash',
    'gemini-2.0-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-3-flash-preview',
    'gemini-3.1-pro-preview',
    'gemini-3-pro-preview',
    'gemini-pro-latest',
    'gemini-flash-latest',
    'gemini-flash-lite-latest'
]

# Paths
chapters_dir = "/home/mark/working/18phut/src/content/chapters"
cache_path = "/home/mark/working/18phut/src/data/quizzes_25_cache.json"
final_quizzes_path = "/home/mark/working/18phut/src/data/quizzes.json"

# Load existing cache
cache_data = {}
if os.path.exists(cache_path):
    try:
        with open(cache_path, "r", encoding="utf-8") as f:
            cache_data = json.load(f)
        print(f"Loaded existing cache with {len(cache_data)} chapters.")
    except Exception as e:
        print("Failed to load cache:", e)

# List and sort all chapter files
all_files = sorted([f for f in os.listdir(chapters_dir) if f.endswith(".md")])
print(f"Found {len(all_files)} chapter files to process.")

lock = threading.Lock()

def process_file(file_info):
    index, filename = file_info
    
    # Check if already processed
    with lock:
        if filename in cache_data and len(cache_data[filename]) == 25:
            print(f"Skipping '{filename}' (already generated 25 questions).")
            return True

    print(f"Generating questions for '{filename}'...")
    filepath = os.path.join(chapters_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        chapter_content = f.read()

    prompt = f"""
Bạn là một chuyên gia biên soạn câu hỏi trắc nghiệm giáo dục chuyên sâu. Hãy đọc kỹ nội dung chương sách dưới đây từ cuốn sách '18 Phút' của Peter Bregman.
Hãy soạn thảo đúng 25 câu hỏi trắc nghiệm bằng tiếng Việt theo yêu cầu sau:
- 20 câu hỏi đầu tiên (id từ 1 đến 20): hỏi sâu và cặn kẽ về các chi tiết, luận điểm, ví dụ thực tế và bài học được đề cập trực tiếp trong chương sách để giúp người chơi hiểu sâu sắc nội dung.
- 5 câu hỏi cuối cùng (id từ 21 đến 25): là các câu hỏi liên hệ thực tế cuộc sống hàng ngày và bản thân người đọc (ví dụ: 'Khi đối mặt với tình huống...', 'Bạn nên làm thế nào để áp dụng...', v.v.) giúp người chơi dễ dàng tự liên hệ với bản thân.

Mỗi câu hỏi phải có cấu trúc như sau:
1. 'id': số nguyên từ 1 đến 25.
2. 'question': câu hỏi rõ ràng, dễ hiểu nhưng có tính thử thách.
3. 'options': mảng gồm đúng 4 chuỗi phương án lựa chọn khác nhau. Không được dùng các phương án mơ hồ như 'Tất cả các đáp án trên'.
4. 'answer': chuỗi phương án đúng (phải trùng khớp hoàn toàn với một trong các chuỗi trong 'options').
5. 'explanation': lời giải thích chi tiết, thấu đáo cho câu hỏi và đáp án đúng.

Đầu ra bắt buộc phải là một mảng JSON hợp lệ chứa đúng 25 đối tượng câu hỏi theo cấu trúc trên, không kèm theo bất kỳ văn bản giải thích hay định dạng markdown nào ngoài chuỗi JSON.

Nội dung chương sách:
{chapter_content}
"""

    retries = 5
    success = False
    
    # Select starting model based on file index to spread the load
    model_idx = index % len(AVAILABLE_MODELS)
    
    for attempt in range(retries):
        model_name = AVAILABLE_MODELS[(model_idx + attempt) % len(AVAILABLE_MODELS)]
        try:
            # Recreate model with chosen name
            model = genai.GenerativeModel(model_name)
            response = model.generate_content(
                prompt,
                generation_config={"response_mime_type": "application/json"}
            )
            questions = json.loads(response.text)
            
            # Basic validation
            if not isinstance(questions, list) or len(questions) != 25:
                raise ValueError(f"Generated {len(questions) if isinstance(questions, list) else 'non-list'} questions instead of 25.")
            
            # Save to cache with thread lock
            with lock:
                cache_data[filename] = questions
                with open(cache_path, "w", encoding="utf-8") as f:
                    json.dump(cache_data, f, ensure_ascii=False, indent=2)
            
            print(f"Successfully generated and cached 25 questions for '{filename}' using {model_name}.")
            success = True
            break
        except Exception as e:
            # Handle rate limiting specifically by waiting longer
            if "429" in str(e):
                print(f"Rate limit (429) on model '{model_name}' for '{filename}'. Attempt {attempt+1}/{retries}. Sleeping 25s...")
                time.sleep(25)
            else:
                print(f"Attempt {attempt+1} failed for '{filename}' using {model_name}: {e}. Sleeping 5s...")
                time.sleep(5)
        
    time.sleep(5)
    return success

# Pack file index together with name to allow model rotation based on index
files_to_process = list(enumerate(all_files))

with ThreadPoolExecutor(max_workers=1) as executor:
    results = list(executor.map(process_file, files_to_process))

print("\nProcessing complete.")

if len(cache_data) == len(all_files):
    # Backup original quizzes.json
    if os.path.exists(final_quizzes_path):
        backup_path = "/home/mark/working/18phut/src/data/quizzes_old_10.json"
        if not os.path.exists(backup_path):
            os.rename(final_quizzes_path, backup_path)
            print(f"Backed up original quizzes.json to {backup_path}")
    
    # Save cache as quizzes.json
    with open(final_quizzes_path, "w", encoding="utf-8") as f:
        json.dump(cache_data, f, ensure_ascii=False, indent=2)
    print("Successfully written all 25 questions per chapter to src/data/quizzes.json!")
else:
    print(f"Progress: {len(cache_data)}/{len(all_files)} chapters done. Run this script again to resume.")
