import { getAllChapters } from "@/lib/chapters";
import QuizzesClient from "./QuizzesClient";

export default function QuizzesPage() {
  const chapters = getAllChapters();

  return <QuizzesClient chapters={chapters} />;
}
