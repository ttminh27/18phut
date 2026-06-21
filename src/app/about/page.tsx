"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, Heart, Sparkles, Code, Coffee, ZoomIn, ZoomOut } from "lucide-react";

export default function AboutPage() {
  const [fontSize, setFontSize] = useState(16); // Default base font size

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

  return (
    <div className="max-w-3xl mx-auto px-1 py-4 sm:py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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

      {/* Banner / Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/80 dark:to-indigo-950/20 p-6 sm:p-10 md:p-12 shadow-xs border border-slate-200/60 dark:border-slate-700/60 mb-8 group transition-all duration-300">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-56 h-56 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-2xl group-hover:scale-115 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-44 h-44 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-xl group-hover:scale-115 transition-transform duration-500"></div>
        
        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-indigo-900/50 shadow-md bg-transparent flex-shrink-0 group-hover:rotate-3 group-hover:scale-[1.02] transition-all duration-300">
            <Image
              src="/author_avatar.png"
              alt="Thiên Cơ"
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30 rounded-full mb-3">
              <Sparkles className="w-3 h-3 text-amber-500 dark:text-amber-400 fill-current" /> Tác Giả Web App
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              Thiên Cơ
            </h1>
            <p 
              className="text-slate-650 dark:text-slate-355 font-medium max-w-md leading-relaxed"
              style={{ fontSize: `${fontSize - 1}px` }}
            >
              Một người yêu thích nghiên cứu công nghệ, luôn tìm tòi học hỏi những điều mới mẻ và mong muốn chia sẻ tri thức hữu ích tới mọi người.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid Info */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left Column: Contact details & Hobby */}
        <div className="md:col-span-2 space-y-6">
          {/* Motivation Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xs border border-slate-100 dark:border-slate-700/80 hover:shadow-md transition-all">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500/10" /> Về Dự Án & Bản Thân
            </h2>
            <div 
              className="space-y-4 text-slate-650 dark:text-slate-300 leading-relaxed"
              style={{ fontSize: `${fontSize}px` }}
            >
              <p>
                Chào bạn! Mình là <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Thiên Cơ</strong>. Mình là một người đam mê nghiên cứu các công nghệ mới và luôn mong muốn được chia sẻ những kiến thức bổ ích tới tất cả mọi người. Ứng dụng đọc sách và mini game <strong className="font-semibold">18 Phút</strong> này được tạo ra hoàn toàn từ <span className="underline decoration-indigo-500 decoration-2 underline-offset-4 font-semibold text-slate-800 dark:text-slate-200">sở thích cá nhân</span> và nguồn cảm hứng đó.
              </p>
              <p>
                Cuốn sách <strong>"18 Phút" của Peter Bregman</strong> mang lại rất nhiều bài học quý giá về cách quản lý thời gian, tập trung vào những điều thực sự quan trọng và làm chủ cuộc sống. Mình xây dựng công cụ này với mong muốn số hóa nội dung sách, kết hợp cùng các tính năng tương tác như <strong>Mini Game</strong> trắc nghiệm và phương pháp đọc <strong>SQ3R</strong> để giúp mọi người dễ dàng nắm bắt kiến thức một cách thú vị, trực quan nhất.
              </p>
              <p>
                Đây có thể coi là một ứng dụng dạng <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">"Tea-supported software"</strong> – nghĩa là các bạn có thể sử dụng hoàn toàn miễn phí. Tuy nhiên, nếu muốn gửi lời cảm ơn, bạn có thể 'tiếp sức' cho tác giả bằng một ly trà xanh thanh mát hoặc cốc nước vối ấm lòng để làm nhiên liệu sáng tạo nhé! 🍵
              </p>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xs border border-slate-100 dark:border-slate-700/80 hover:shadow-md transition-all">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-500" /> Thông Tin Liên Hệ
            </h2>
            <p 
              className="text-slate-500 dark:text-slate-400 mb-4"
              style={{ fontSize: `${fontSize - 2}px` }}
            >
              Mọi ý kiến đóng góp, phản hồi hoặc hợp tác, bạn có thể liên hệ với mình qua các kênh dưới đây:
            </p>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:ttminh27@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email</span>
                  <span 
                    className="block font-semibold text-slate-750 dark:text-slate-350 truncate"
                    style={{ fontSize: `${fontSize - 2}px` }}
                  >
                    ttminh27@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:0989021981"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Điện thoại</span>
                  <span 
                    className="block font-semibold text-slate-750 dark:text-slate-350 truncate"
                    style={{ fontSize: `${fontSize - 2}px` }}
                  >
                    0989 021 981
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Info Card */}
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-indigo-50/30 to-purple-50/10 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-base flex items-center gap-2">
              <Coffee className="w-4.5 h-4.5 text-amber-500" /> Vài Điều Thú Vị
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center mt-0.5">
                  1
                </span>
                <div>
                  <span 
                    className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
                    style={{ fontSize: `${fontSize - 1}px` }}
                  >
                    Sở thích cá nhân
                  </span>
                  <span 
                    className="block text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed"
                    style={{ fontSize: `${fontSize - 3}px` }}
                  >
                    Đam mê nghiên cứu toán học, tìm hiểu công nghệ mới và thưởng thức hương vị của các loại trà.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-750 dark:text-purple-300 text-xs font-bold flex items-center justify-center mt-0.5">
                  2
                </span>
                <div>
                  <span 
                    className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
                    style={{ fontSize: `${fontSize - 1}px` }}
                  >
                    Cuốn sách truyền cảm hứng
                  </span>
                  <span 
                    className="block text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed"
                    style={{ fontSize: `${fontSize - 3}px` }}
                  >
                    "18 Phút" của Peter Bregman là kim chỉ nam cho thói quen tập trung mỗi ngày.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 text-xs font-bold flex items-center justify-center mt-0.5">
                  3
                </span>
                <div>
                  <span 
                    className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
                    style={{ fontSize: `${fontSize - 1}px` }}
                  >
                    Mục tiêu phát triển
                  </span>
                  <span 
                    className="block text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed"
                    style={{ fontSize: `${fontSize - 3}px` }}
                  >
                    Liên tục cải tiến app, thêm nhiều chế độ thử thách & tóm tắt sách trực quan.
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200/65 dark:border-slate-700/60 mt-6 pt-6 text-center">
              <span 
                className="inline-block font-semibold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-300 px-3 py-1.5 rounded-lg"
                style={{ fontSize: `${fontSize - 2}px` }}
              >
                Chúc bạn đọc sách vui vẻ! 📖
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
