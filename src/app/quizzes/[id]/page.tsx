import { getAllChapters } from "@/lib/chapters";
import { notFound } from "next/navigation";
import quizzesData from "@/data/quizzes.json";
import QuizClient from "./QuizClient";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const chapters = getAllChapters();
  return chapters.map((chapter) => ({
    id: chapter.id,
  }));
}

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const chapters = getAllChapters();
  const chapter = chapters.find(c => c.id === decodedId);

  if (!chapter) {
    notFound();
  }

  // Ensure quizzesData is correctly typed
  const quizzesMap: Record<string, any[]> = quizzesData;
  
  // Find the exact filename that matches the chapter id
  // The quizzes.json keys are exactly the filename, e.g. "00_LỜI GIỚI THIỆU.md"
  // The decodedId is "00_LỜI GIỚI THIỆU"
  const fileKey = Object.keys(quizzesMap).find(key => key === decodedId + '.md');
  
  const quizzes = fileKey ? quizzesMap[fileKey] : [];

  return (
    <div className="animate-in fade-in duration-500 pb-16">
      <div className="mb-8">
        <Link href="/quizzes" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Trở về danh sách Game
        </Link>
      </div>
      <QuizClient quizzes={quizzes} chapterTitle={chapter.title} chapterId={chapter.id} />
    </div>
  );
}
