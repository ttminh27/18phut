"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { ZoomIn, ZoomOut, Search, ChevronUp, ChevronDown, X } from "lucide-react";

// Escape regex special characters
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function ChapterReader({ content }: { content: string }) {
  const [fontSize, setFontSize] = useState(18); // Default font size
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMatchIndex, setActiveMatchIndex] = useState(-1);
  const [matchCount, setMatchCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load font size preference
  useEffect(() => {
    const saved = localStorage.getItem("18phut-reader-font-size");
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 14 && parsed <= 32) {
        setFontSize(parsed);
      }
    }
  }, []);

  // Keyboard shortcut Ctrl+F or Cmd+F to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        setShowSearch(true);
        setTimeout(() => {
          if (searchInputRef.current) {
            searchInputRef.current.focus();
            searchInputRef.current.select();
          }
        }, 100);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Global Esc to close search
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSearch) {
        setShowSearch(false);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [showSearch]);

  // Handle query changes: count matches and highlight
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) {
        setMatchCount(0);
        setActiveMatchIndex(-1);
        return;
      }

      const elements = document.querySelectorAll(".search-match");
      setMatchCount(elements.length);

      if (elements.length > 0) {
        setActiveMatchIndex(0);
      } else {
        setActiveMatchIndex(-1);
      }
    }, 150); // Debounce DOM query to allow React to render highlights first

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle active index changes: navigate and add special active styling
  useEffect(() => {
    const elements = document.querySelectorAll(".search-match");

    // Reset all matches to regular highlight
    elements.forEach((el) => {
      el.classList.remove("active-search-match", "bg-orange-450", "bg-orange-400", "dark:bg-orange-600", "text-white");
      el.classList.add("bg-amber-300", "dark:bg-amber-700", "text-black", "dark:text-white");
    });

    if (activeMatchIndex >= 0 && activeMatchIndex < elements.length) {
      const activeEl = elements[activeMatchIndex] as HTMLElement;
      activeEl.classList.remove("bg-amber-300", "dark:bg-amber-700", "text-black", "dark:text-white");
      activeEl.classList.add("active-search-match", "bg-orange-400", "dark:bg-orange-600", "text-white");
      
      // Scroll into view
      activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeMatchIndex, matchCount]); // trigger when index or matches change

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

  const handleNext = () => {
    if (matchCount > 0) {
      setActiveMatchIndex((prev) => (prev + 1) % matchCount);
    }
  };

  const handlePrev = () => {
    if (matchCount > 0) {
      setActiveMatchIndex((prev) => (prev - 1 + matchCount) % matchCount);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.shiftKey) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  // Function to perform dynamic highlighting on text nodes
  function highlightText(text: string, query: string): React.ReactNode {
    if (!query.trim()) return text;

    const escapedQuery = escapeRegExp(query.trim());
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === query.trim().toLowerCase() ? (
        <mark
          key={index}
          className="bg-amber-300 dark:bg-amber-700 text-black dark:text-white px-0.5 rounded-xs search-match transition-all duration-200"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  }

  // Recursive element tree cloner to inject highlights into children of Markdown tags
  function highlightChildren(children: React.ReactNode, query: string): React.ReactNode {
    if (!query.trim()) return children;

    if (typeof children === "string") {
      return highlightText(children, query);
    }

    if (Array.isArray(children)) {
      return children.map((child, index) => (
        <React.Fragment key={index}>
          {highlightChildren(child, query)}
        </React.Fragment>
      ));
    }

    if (children && typeof children === "object" && "type" in children && "props" in children) {
      const element = children as React.ReactElement<any>;
      return React.cloneElement(element, {
        children: highlightChildren(element.props.children, query),
      });
    }

    return children;
  }

  // Custom components object for react-markdown to intercept text and inject highlights
  const markdownComponents = {
    p: ({ children }: any) => <p>{highlightChildren(children, searchQuery)}</p>,
    li: ({ children }: any) => <li>{highlightChildren(children, searchQuery)}</li>,
    h1: ({ children }: any) => <h1>{highlightChildren(children, searchQuery)}</h1>,
    h2: ({ children }: any) => <h2>{highlightChildren(children, searchQuery)}</h2>,
    h3: ({ children }: any) => <h3>{highlightChildren(children, searchQuery)}</h3>,
    h4: ({ children }: any) => <h4>{highlightChildren(children, searchQuery)}</h4>,
    h5: ({ children }: any) => <h5>{highlightChildren(children, searchQuery)}</h5>,
    h6: ({ children }: any) => <h6>{highlightChildren(children, searchQuery)}</h6>,
    strong: ({ children }: any) => <strong>{highlightChildren(children, searchQuery)}</strong>,
    em: ({ children }: any) => <em>{highlightChildren(children, searchQuery)}</em>,
  };

  return (
    <div className="relative">
      {/* Sticky Search Panel */}
      {showSearch && (
        <div className="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-3 px-4 -mx-4 border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 mb-6 flex items-center justify-between shadow-xs animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-3 w-full max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              <input
                id="reader-search-input"
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Tìm từ khóa... (Enter: tiếp, Shift+Enter: trước)"
                className="w-full pl-9 pr-8 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={handleClear}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350 p-0.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="Xóa ô tìm kiếm"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {searchQuery && (
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className={`text-xs font-bold min-w-[55px] text-center select-none px-2 py-1 rounded-lg transition-colors ${
                  matchCount > 0 
                    ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400" 
                    : "bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400"
                }`}>
                  {matchCount > 0 ? `${activeMatchIndex + 1}/${matchCount}` : "0/0"}
                </span>
                <button
                  onClick={handlePrev}
                  disabled={matchCount === 0}
                  className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-lg disabled:opacity-30 disabled:pointer-events-none transition-all"
                  title="Kết quả trước"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={matchCount === 0}
                  className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-lg disabled:opacity-30 disabled:pointer-events-none transition-all"
                  title="Kết quả tiếp theo"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowSearch(false)}
            className="ml-3 p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50 rounded-lg transition-all"
            title="Đóng bảng tìm kiếm (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Settings & Search Controls */}
      <div className="fixed bottom-8 right-6 md:right-8 z-50 flex items-center bg-white/90 dark:bg-slate-800/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={handleZoomOut}
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-650 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize <= 14}
          title="Thu nhỏ chữ"
        >
          <ZoomOut className="w-4.5 h-4.5" />
        </button>
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 px-2 select-none min-w-[40px] text-center">
          {fontSize}px
        </span>
        <button
          onClick={handleZoomIn}
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-650 dark:hover:text-indigo-400 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
          disabled={fontSize >= 32}
          title="Phóng to chữ"
        >
          <ZoomIn className="w-4.5 h-4.5" />
        </button>

        <span className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1.5"></span>

        <button
          onClick={() => {
            setShowSearch((prev) => {
              const next = !prev;
              if (next) {
                setTimeout(() => {
                  if (searchInputRef.current) {
                    searchInputRef.current.focus();
                    searchInputRef.current.select();
                  }
                }, 100);
              }
              return next;
            });
          }}
          className={`p-2 rounded-full transition-all ${
            showSearch
              ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold"
              : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400"
          }`}
          title="Tìm kiếm trong chương (Ctrl+F)"
        >
          <Search className="w-4.5 h-4.5" />
        </button>
      </div>

      <div
        className="prose prose-slate dark:prose-invert prose-indigo max-w-none mb-16 transition-all duration-300 ease-out leading-relaxed"
        style={{ fontSize: `${fontSize}px` }}
      >
        <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
