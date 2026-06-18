import { getAllChapters } from "@/lib/chapters";
import Link from "next/link";
import { BookText } from "lucide-react";

export default function ChaptersPage() {
  const chapters = getAllChapters();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-8">Mục Lục</h1>
      <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/chapters/${chapter.id}`}
            className="group flex items-center p-2.5 sm:p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-500/50 transition-all"
          >
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-transparent text-indigo-600 dark:text-indigo-400 mr-2.5 sm:mr-4 group-hover:scale-105 transition-transform flex-shrink-0">
              <BookText className="w-5 h-5" />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-900 dark:group-hover:text-indigo-200 line-clamp-2 text-sm sm:text-base">
              {chapter.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
