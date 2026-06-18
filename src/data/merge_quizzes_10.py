import json
import os

data_dir = '/home/mark/working/18phut/webapp/src/data'
files = [f'quizzes_10_part{i}.json' for i in range(1, 11)]

merged = {}

for f in files:
    path = os.path.join(data_dir, f)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as file:
            try:
                data = json.load(file)
                merged.update(data)
            except Exception as e:
                print(f"Error loading {f}: {e}")

with open(os.path.join(data_dir, 'quizzes.json'), 'w', encoding='utf-8') as out:
    json.dump(merged, out, ensure_ascii=False, indent=2)

print(f"Merged {len(merged)} chapters into quizzes.json")
