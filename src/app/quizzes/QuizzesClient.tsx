"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Gamepad2, ZoomIn, ZoomOut, Search, X } from "lucide-react";
import { Chapter } from "@/lib/chapters";

export default function QuizzesClient({ chapters }: { chapters: (Chapter & { quizCount?: number })[] }) {
  const [fontSize, setFontSize] = useState(16); // Default base font size
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("18phut-ui-font-size");
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 12 && parsed <= 24) {
        setFontSize(parsed);
      }
    }
  }, []);

  const handleZoomIn = () => {
    setFontSize((s) => {
      const next = Math.min(s + 2, 24);
      localStorage.setItem("18phut-ui-font-size", next.toString());
      return next;
    });
  };

  const handleZoomOut = () => {
    setFontSize((s) => {
      const next = Math.max(s - 2, 12);
      localStorage.setItem("18phut-ui-font-size", next.toString());
      return next;
    });
  };

  const filteredChapters = chapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 
          className="font-extrabold tracking-tight text-slate-900 dark:text-slate-100 transition-all duration-350"
          style={{ fontSize: `${fontSize * 1.875}px`, lineHeight: "1.2" }}
        >
          Mini Game Thử Thách
        </h1>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs transition-all duration-300">
          <input
            type="text"
            placeholder="Tìm kiếm game..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-9 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs focus:outline-hidden focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm font-medium"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {filteredChapters.length === 0 ? (
        <div className="text-center py-12 px-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-xs animate-in fade-in zoom-in-95 duration-300">
          <Gamepad2 className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <p className="text-slate-500 dark:text-slate-400 font-medium">Không tìm thấy Game trắc nghiệm nào phù hợp.</p>
        </div>
      ) : (
        <div className="grid gap-2 sm:gap-3 grid-cols-1 md:grid-cols-2">
          {filteredChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/quizzes/${chapter.id}`}
              className="group flex items-center justify-between p-2.5 sm:p-3.5 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-purple-200 dark:hover:border-purple-500/50 transition-all gap-1.5 sm:gap-3"
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
      )}
    </div>
  );
}
