import { getAllChapters } from "@/lib/chapters";
import ChaptersClient from "@/app/chapters/ChaptersClient";

export default function EnglishChaptersPage() {
  const chapters = getAllChapters("en");

  return <ChaptersClient chapters={chapters} lang="en" />;
}
