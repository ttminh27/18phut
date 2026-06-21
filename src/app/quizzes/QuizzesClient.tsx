"use client";

import { useState } from "react";
import Link from "next/link";
import { Gamepad2, ZoomIn, ZoomOut } from "lucide-react";
import { Chapter } from "@/lib/chapters";

export default function QuizzesClient({ chapters }: { chapters: (Chapter & { quizCount?: number })[] }) {
  const [fontSize, setFontSize] = useState(16); // Default base font size

  const handleZoomIn = () => setFontSize(s => Math.min(s + 2, 24));
  const handleZoomOut = () => setFontSize(s => Math.max(s - 2, 12));

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Floating Zoom Controls */}
      <div className="fixed bottom-8 right-6 md:right-8 z-50 flex items-center bg-white/90 dark:bg-slate-800/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
        <button 
          onClick={handleZoomOut} 
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize <= 12}
          title="Thu nhỏ chữ"
        >
          <ZoomOut className="w-4.5 h-4.5" />
        </button>
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 px-2 select-none min-w-[40px] text-center">{fontSize}px</span>
        <button 
          onClick={handleZoomIn} 
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize >= 24}
          title="Phóng to chữ"
        >
          <ZoomIn className="w-4.5 h-4.5" />
        </button>
      </div>

      <h1 
        className="font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-8"
        style={{ fontSize: `${fontSize * 1.875}px`, lineHeight: "1.2" }}
      >
        Mini Game Thử Thách
      </h1>

      <div className="grid gap-2 sm:gap-3 grid-cols-1 md:grid-cols-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/quizzes/${chapter.id}`}
            className="group flex items-center justify-between p-2.5 sm:p-3.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-purple-200 dark:hover:border-purple-500/50 transition-all gap-1.5 sm:gap-3"
          >
            <div className="flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-transparent text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform flex-shrink-0">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h2 
              className="font-semibold text-slate-800 dark:text-slate-200 truncate flex-1 group-hover:text-purple-700 dark:group-hover:text-purple-300"
              style={{ fontSize: `${fontSize}px` }}
            >
              {chapter.title}
            </h2>
            <span 
              className="font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/30 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex-shrink-0"
              style={{ fontSize: `${fontSize * 0.75}px` }}
            >
              {chapter.quizCount || 0} câu hỏi
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
