"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Gamepad2, Brain, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/chapters",
      label: "Nội dung",
      icon: BookOpen,
    },
    {
      href: "/en/chapters",
      label: "Content",
      icon: BookOpen,
    },
    {
      href: "/quizzes",
      label: "Game",
      icon: Gamepad2,
    },
    {
      href: "/sq3r",
      label: "SQ3R",
      icon: Brain,
    },
    {
      href: "/about",
      label: "Tác giả",
      icon: User,
    },
  ];

  return (
    <nav className="flex items-center space-x-1 sm:space-x-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
              isActive
                ? "bg-indigo-50/80 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 font-semibold shadow-xs"
                : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"
            }`}
          >
            <Icon className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-all duration-300 ${
              isActive 
                ? "scale-110 stroke-[2.5]" 
                : "group-hover:scale-110"
            }`} />
            <span className="hidden sm:inline">{item.label}</span>
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
            )}
          </Link>
        );
      })}
      <ThemeToggle />
    </nav>
  );
}
