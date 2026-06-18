import { getAllChapters } from "@/lib/chapters";
import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export default function QuizzesPage() {
  const chapters = getAllChapters();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-8">Mini Game Thử Thách</h1>
      <div className="grid gap-2 sm:gap-3 grid-cols-1 md:grid-cols-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/quizzes/${chapter.id}`}
            className="group flex items-center justify-between py-2 px-2.5 sm:p-3.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-purple-200 dark:hover:border-purple-500/50 transition-all gap-1.5 sm:gap-3"
          >
            <div className="flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-transparent text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform flex-shrink-0">
              <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base truncate flex-1 group-hover:text-purple-700 dark:group-hover:text-purple-300">
              {chapter.title}
            </h2>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/30 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex-shrink-0">
              10 quiz
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
