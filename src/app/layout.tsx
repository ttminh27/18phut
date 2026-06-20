import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { BookOpen, Gamepad2, Brain } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "18 Phút - Peter Bregman",
  description: "Web app đọc sách và mini game cho cuốn sách 18 Phút.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                18 Phút - Peter Bregman
              </Link>
              <nav className="flex items-center space-x-4">
                <Link href="/chapters" className="flex items-center space-x-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <BookOpen className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">Nội dung</span>
                </Link>
                <Link href="/quizzes" className="flex items-center space-x-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Gamepad2 className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">Mini Game</span>
                </Link>
                <Link href="/sq3r" className="flex items-center space-x-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Brain className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">SQ3R</span>
                </Link>
                <ThemeToggle />
              </nav>
            </div>
          </header>
          <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8">
            {children}
          </main>
          <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors">
            <div className="max-w-4xl mx-auto px-4 py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Design by Thiên Cơ
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
