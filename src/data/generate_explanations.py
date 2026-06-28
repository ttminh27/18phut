import json
import os
import google.generativeai as genai
import time

genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-2.5-flash')

json_path = "/home/mark/working/18phut/src/data/quizzes_10_part5.json"
chapters_dir = "/home/mark/working/18phut/src/content/vn/chapters"

with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for chapter_title, questions in data.items():
    chapter_file = os.path.join(chapters_dir, chapter_title)
    try:
        with open(chapter_file, 'r', encoding='utf-8') as f:
            chapter_content = f.read()
    except Exception as e:
        print(f"Could not read chapter {chapter_title}: {e}")
        continue

    print(f"Processing chapter: {chapter_title}")
    
    for q in questions:
        if 'explanation' in q:
            continue
            
        prompt = f"""
Bạn là một chuyên gia giải thích câu hỏi trắc nghiệm dựa trên nội dung chương sách.
Dưới đây là nội dung của chương "{chapter_title}":
---
{chapter_content}
---

Và đây là một câu hỏi trắc nghiệm liên quan đến chương sách:
Câu hỏi: {q['question']}
Các lựa chọn:
{chr(10).join(f"- {opt}" for opt in q['options'])}
Đáp án đúng: {q['answer']}

Hãy viết MỘT đoạn văn giải thích chi tiết khoảng 2-3 câu bằng tiếng Việt.
Trong đoạn văn này, hãy giải thích rõ tại sao đáp án đúng lại là đáp án chính xác nhất dựa trên bài học cốt lõi của chương, và tại sao các lựa chọn khác lại sai hoặc kém tối ưu hơn.
KHÔNG viết thêm bất kỳ tiêu đề, lời chào, hay thông tin thừa nào ngoài đoạn văn giải thích.
"""
        response = None
        while response is None:
            try:
                response = model.generate_content(prompt)
                explanation = response.text.strip()
                q['explanation'] = explanation
                print(f"Q: {q['question']}")
                print(f"A: {explanation}")
                time.sleep(1) # rate limit
            except Exception as e:
                print(f"Error generating explanation for question: {e}")
                time.sleep(5)

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("DONE")
