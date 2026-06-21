"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ZoomIn, ZoomOut } from "lucide-react";

export default function ChapterReader({ content }: { content: string }) {
  const [fontSize, setFontSize] = useState(18); // Default font size

  useEffect(() => {
    const saved = localStorage.getItem("18phut-reader-font-size");
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 14 && parsed <= 32) {
        setFontSize(parsed);
      }
    }
  }, []);

  const handleZoomIn = () => {
    setFontSize((s) => {
      const next = Math.min(s + 4, 32);
      localStorage.setItem("18phut-reader-font-size", next.toString());
      return next;
    });
  };

  const handleZoomOut = () => {
    setFontSize((s) => {
      const next = Math.max(s - 4, 14);
      localStorage.setItem("18phut-reader-font-size", next.toString());
      return next;
    });
  };

  return (
    <div className="relative">
      {/* Floating Zoom Controls */}
      <div className="fixed bottom-8 right-6 md:right-8 z-50 flex items-center bg-white/90 dark:bg-slate-800/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
        <button 
          onClick={handleZoomOut} 
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize <= 14}
          title="Thu nhỏ chữ"
        >
          <ZoomOut className="w-4.5 h-4.5" />
        </button>
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 px-2 select-none min-w-[40px] text-center">{fontSize}px</span>
        <button 
          onClick={handleZoomIn} 
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize >= 32}
          title="Phóng to chữ"
        >
          <ZoomIn className="w-4.5 h-4.5" />
        </button>
      </div>

      <div 
        className="prose prose-slate dark:prose-invert prose-indigo max-w-none mb-16 transition-all duration-300 ease-out leading-relaxed"
        style={{ fontSize: `${fontSize}px` }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
