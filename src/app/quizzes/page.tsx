import { getAllChapters } from "@/lib/chapters";
import QuizzesClient from "./QuizzesClient";
import quizzesData from "@/data/quizzes.json";

export default function QuizzesPage() {
  const quizzesMap: Record<string, any[]> = quizzesData;
  const chapters = getAllChapters().map(ch => ({
    ...ch,
    quizCount: quizzesMap[ch.id + '.md']?.length || 0
  }));

  return <QuizzesClient chapters={chapters} />;
}
