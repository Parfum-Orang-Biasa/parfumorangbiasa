import { Perfume } from "../data/type";

export function getBestMatchingPerfume(
  userAnswers: string[][],
  perfumes: Perfume[]
): Perfume {
  const userTags = userAnswers.flat(); 

  const scored = perfumes.map((perfume) => {
    const matchedTags = perfume.tags.filter((tag) => userTags.includes(tag));
    const score = matchedTags.length;

    return { ...perfume, score, matchedTags };
  });

  console.log("🧠 Tag dari user:", userTags);
  console.log("📊 Skor parfum:", scored);

  scored.sort((a, b) => b.score - a.score);

  return scored[0];
}