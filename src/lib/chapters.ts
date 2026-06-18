import fs from 'fs';
import path from 'path';

const chaptersDirectory = path.join(process.cwd(), 'src/content/chapters');

export interface Chapter {
  id: string;
  title: string;
  content?: string;
}

export function getAllChapters(): Chapter[] {
  if (!fs.existsSync(chaptersDirectory)) return [];
  const fileNames = fs.readdirSync(chaptersDirectory);
  const chapters = fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const title = id.replace(/^\d+_/, ''); // remove prefix like 01_
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

export function getChapterContent(id: string): Chapter | null {
  const fullPath = path.join(chaptersDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const title = id.replace(/^\d+_/, '');
  return {
    id,
    title,
    content: fileContents,
  };
}
