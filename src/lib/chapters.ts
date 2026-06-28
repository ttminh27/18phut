import fs from 'fs';
import path from 'path';

export interface Chapter {
  id: string;
  title: string;
  content?: string;
}

function cleanTitle(id: string, lang: 'vn' | 'en'): string {
  const rawTitle = id.replace(/^\d+_/, ''); // remove prefix like 01_
  if (lang === 'en') {
    const clean = rawTitle.replace(/_/g, ' ');
    return clean
      .split(' ')
      .map(word => {
        const lower = word.toLowerCase();
        if (lower === 'i' || lower === 'ii' || lower === 'iii' || lower === 'iv') {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
  return rawTitle;
}

export function getAllChapters(lang: 'vn' | 'en' = 'vn'): Chapter[] {
  const chaptersDirectory = path.join(process.cwd(), `src/content/${lang}/chapters`);
  if (!fs.existsSync(chaptersDirectory)) return [];
  const fileNames = fs.readdirSync(chaptersDirectory);
  const chapters = fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const title = cleanTitle(id, lang);
      return {
        id,
        title,
      };
    })
    .sort((a, b) => {
      const numA = parseInt(a.id.split('_')[0], 10);
      const numB = parseInt(b.id.split('_')[0], 10);
      return numA - numB;
    });
  return chapters;
}

export function getChapterContent(id: string, lang: 'vn' | 'en' = 'vn'): Chapter | null {
  const chaptersDirectory = path.join(process.cwd(), `src/content/${lang}/chapters`);
  const fullPath = path.join(chaptersDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const title = cleanTitle(id, lang);
  return {
    id,
    title,
    content: fileContents,
  };
}
