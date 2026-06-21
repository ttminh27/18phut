"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookText, ZoomIn, ZoomOut, Search, X } from "lucide-react";
import { Chapter } from "@/lib/chapters";

export default function ChaptersClient({ chapters }: { chapters: Chapter[] }) {
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
          Mục Lục
        </h1>
        
        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs transition-all duration-300">
          <input
            type="text"
            placeholder="Tìm kiếm chương..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-9 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm font-medium"
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
          <BookText className="w-12 h-12 text-slate-300 dark:text-slate-650 mx-auto mb-3" />
          <p className="text-slate-500 dark:text-slate-400 font-medium">Không tìm thấy chương nào phù hợp với từ khóa của bạn.</p>
        </div>
      ) : (
        <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2">
          {filteredChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/chapters/${chapter.id}`}
              className="group flex items-center py-2 px-2.5 sm:p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-500/50 transition-all"
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
      )}
    </div>
  );
}
