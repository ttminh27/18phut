"use client";

import { useState } from "react";
import Link from "next/link";
import { BookText, ZoomIn, ZoomOut } from "lucide-react";
import { Chapter } from "@/lib/chapters";

export default function ChaptersClient({ chapters }: { chapters: Chapter[] }) {
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
        Mục Lục
      </h1>
      
      <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/chapters/${chapter.id}`}
            className="group flex items-center py-2 px-2.5 sm:p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-500/50 transition-all"
          >
            <div className="flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-transparent text-indigo-600 dark:text-indigo-400 mr-2 sm:mr-4 group-hover:scale-105 transition-transform flex-shrink-0">
              <BookText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span 
              className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-900 dark:group-hover:text-indigo-200 line-clamp-2"
              style={{ fontSize: `${fontSize}px` }}
            >
              {chapter.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
