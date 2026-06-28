import { getChapterContent, getAllChapters } from "@/lib/chapters";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Gamepad2, ArrowLeft, ArrowRight } from "lucide-react";
import ChapterReader from "./ChapterReader";

export async function generateStaticParams() {
  const chapters = getAllChapters();
  return chapters.flatMap((chapter) => [
    { id: chapter.id },
    { id: encodeURIComponent(chapter.id) },
  ]);
}

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const chapters = getAllChapters();
  const chapter = getChapterContent(decodedId);

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex(c => c.id === decodedId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <article className="animate-in fade-in duration-500 pb-16">
      <div className="mb-8 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <Link href="/chapters" className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Trở về mục lục</span>
          <span className="sm:hidden">Mục lục</span>
        </Link>
        <div className="flex items-center space-x-3 sm:space-x-4">
          {prevChapter ? (
            <Link href={`/chapters/${prevChapter.id}`} className="inline-flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 sm:mr-1.5" />
              <span className="hidden sm:inline">Trước</span>
            </Link>
          ) : (
            <span className="inline-flex items-center text-sm text-slate-300 dark:text-slate-700 cursor-not-allowed font-medium">
              <ArrowLeft className="w-4 h-4 sm:mr-1.5" />
              <span className="hidden sm:inline">Trước</span>
            </span>
          )}
          
          <Link href={`/quizzes/${id}`} className="inline-flex items-center justify-center px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 text-sm font-medium rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors" title="Game">
            <Gamepad2 className="w-4 h-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Game</span>
          </Link>

          {nextChapter ? (
            <Link href={`/chapters/${nextChapter.id}`} className="inline-flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              <span className="hidden sm:inline">Tiếp</span>
              <ArrowRight className="w-4 h-4 sm:ml-1.5" />
            </Link>
          ) : (
            <span className="inline-flex items-center text-sm text-slate-300 dark:text-slate-700 cursor-not-allowed font-medium">
              <span className="hidden sm:inline">Tiếp</span>
              <ArrowRight className="w-4 h-4 sm:ml-1.5" />
            </span>
          )}
        </div>
      </div>
      
      <ChapterReader content={chapter.content || ""} />
      
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 w-full">
        <div className="flex-1 flex justify-start">
          {prevChapter && (
            <Link href={`/chapters/${prevChapter.id}`} className="flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-3 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div className="hidden sm:flex flex-col text-left overflow-hidden">
                <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Chương trước</span>
                <span className="font-medium truncate max-w-[120px] sm:max-w-[140px] md:max-w-[180px]">{prevChapter.title}</span>
              </div>
              <span className="sm:hidden font-medium text-sm">Trước</span>
            </Link>
          )}
        </div>

        <div className="flex-shrink-0 flex justify-center">
          <Link 
            href={`/quizzes/${id}`}
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 dark:bg-indigo-500 text-white text-sm sm:text-base font-medium rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
            Game
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
          {nextChapter && (
            <Link href={`/chapters/${nextChapter.id}`} className="flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group text-right">
              <div className="hidden sm:flex flex-col text-right overflow-hidden">
                <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Chương tiếp</span>
                <span className="font-medium truncate max-w-[120px] sm:max-w-[140px] md:max-w-[180px]">{nextChapter.title}</span>
              </div>
              <span className="sm:hidden font-medium text-sm">Tiếp</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1.5 sm:ml-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
