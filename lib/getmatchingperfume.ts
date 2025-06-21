import { Perfume } from "../data/type";

export function getBestMatchingPerfume(
  userAnswers: string[][],
  perfumes: Perfume[]
): Perfume & { matchedTags: string[] } {
  const userTags = [...new Set(userAnswers.flat())];

  const scored = perfumes.map((perfume) => {
    const matchedTags = perfume.tags.filter((tag) => userTags.includes(tag));
    const score = matchedTags.length;

    return { ...perfume, score, matchedTags };
  });

  scored.sort((a, b) => b.score - a.score);

  console.log("🧠 Tag dari user:", userTags);
  console.log("📊 Skor parfum:", scored);

  return {
    ...scored[0],
    matchedTags: scored[0].matchedTags,
  };
}
