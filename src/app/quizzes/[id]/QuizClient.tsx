"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";

interface Quiz {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export default function QuizClient({ quizzes, chapterTitle, chapterId }: { quizzes: Quiz[], chapterTitle: string, chapterId: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Default font size for quiz

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

  const currentQuiz = quizzes[currentIndex];

  const handleSelect = (option: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    if (option === currentQuiz.answer) {
      setIsCorrect(true);
      setScore(s => s + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto mt-4 sm:mt-8 p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-xl text-center border border-slate-100 dark:border-slate-700 animate-in zoom-in-95 duration-500 transition-colors">
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Trophy className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">Hoàn thành!</h2>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">Bạn đã trả lời đúng <span className="font-bold text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl">{score}</span> / {quizzes.length} câu hỏi.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button 
            onClick={handleRestart}
            className="flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 font-medium rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors text-sm sm:text-base"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Chơi lại
          </button>
          <Link 
            href="/quizzes"
            className="flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm hover:shadow text-sm sm:text-base"
          >
            Về danh sách Game
          </Link>
        </div>
      </div>
    );
  }

  if (!currentQuiz) {
    return <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 mt-8 text-slate-500 dark:text-slate-400">Không có câu hỏi nào cho chương này.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-2 sm:px-0 relative">
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

      <div className="mb-3 sm:mb-6">
        <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors w-full">
          <span className="flex-shrink-0">
            <span className="hidden sm:inline">Câu hỏi </span>{currentIndex + 1} / {quizzes.length}
          </span>
          <span className="font-semibold text-slate-700 dark:text-slate-200 truncate flex-1 text-center px-2 text-xs sm:text-sm">
            {chapterTitle}
          </span>
          <span className="flex-shrink-0 text-right">
            Điểm: <strong className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base font-bold">{score}</strong>
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 sm:h-2 rounded-full mt-2 sm:mt-3 overflow-hidden">
          <div 
            className="bg-indigo-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex) / quizzes.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-3.5 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 transition-colors relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        <h3 
          className="font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 leading-relaxed"
          style={{ fontSize: `${fontSize * 1.25}px` }}
        >
          {currentQuiz.question}
        </h3>

        <div className="grid gap-2 sm:gap-3">
          {currentQuiz.options.map((option, idx) => {
            let itemClass = "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-slate-700 dark:text-slate-300";
            let Icon = null;

            if (selectedAnswer) {
              if (option === currentQuiz.answer) {
                itemClass = "border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300";
                Icon = CheckCircle2;
              } else if (option === selectedAnswer) {
                itemClass = "border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300";
                Icon = XCircle;
              } else {
                itemClass = "border-slate-100 dark:border-slate-800/80 text-slate-400 opacity-40";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                disabled={selectedAnswer !== null}
                className={`relative flex items-center justify-between w-full py-2 px-3 sm:py-3.5 sm:px-5 rounded-xl sm:rounded-2xl border-2 text-left font-medium transition-all duration-200 gap-2 sm:gap-3 ${itemClass}`}
                style={{ fontSize: `${fontSize}px` }}
              >
                <span className="leading-snug">{option}</span>
                {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div className="mt-4 sm:mt-6 animate-in fade-in slide-in-from-bottom-2">
            {currentQuiz.explanation && (
              <div 
                className={`mb-4 sm:mb-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl border ${isCorrect ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900 text-green-900 dark:text-green-200' : 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200'}`}
                style={{ fontSize: `${fontSize * 0.9}px` }}
              >
                <h4 
                  className="font-bold mb-1.5 sm:mb-2 flex items-center"
                  style={{ fontSize: `${fontSize * 1.05}px` }}
                >
                  {isCorrect ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-green-600" /> : <XCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-amber-600" />}
                  Giải thích đáp án
                </h4>
                <p className="leading-relaxed opacity-95">{currentQuiz.explanation}</p>
              </div>
            )}
            <div className="pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center px-6 py-3 sm:px-8 sm:py-3.5 bg-indigo-600 dark:bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm hover:shadow text-sm sm:text-base"
              >
                {currentIndex < quizzes.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
