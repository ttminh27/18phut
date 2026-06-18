import { getAllChapters } from "@/lib/chapters";
import ChaptersClient from "./ChaptersClient";

export default function ChaptersPage() {
  const chapters = getAllChapters();

  return <ChaptersClient chapters={chapters} />;
}
