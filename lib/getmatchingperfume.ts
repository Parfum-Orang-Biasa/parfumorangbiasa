import { Perfume } from "../data/type";

export function getBestMatchingPerfume(
  userAnswers: string[][],
  perfumes: Perfume[]
): Perfume & { matchedTags: string[]; score: number } {
  const userTags = [...new Set(userAnswers.flat())];

  console.log("🧠 Tag dari user:", userTags);

  const scored = perfumes.map((perfume) => {
    const matchedTags = perfume.tags.filter((tag) => userTags.includes(tag));
    let score = matchedTags.length;

    const userIsFeminine = userTags.includes("feminine") || userTags.includes("elegant");
    const userIsUnisex = userTags.includes("unisex");

    let categoryBonus = 0;
    if (
      (userIsFeminine && perfume.category === "Female") ||
      (userIsUnisex && perfume.category === "Unisex")
    ) {
      categoryBonus = 1.5;
      score += categoryBonus;
    }

    const lowerTone = perfume.tone.toLowerCase();
    const extraToneScore = userTags.filter(tag => lowerTone.includes(tag)).length * 0.5;
    score += extraToneScore;

    console.log(`🌸 ${perfume.name}`);
    console.log("  🎯 matchedTags:", matchedTags);
    console.log("  🏷️ baseScore:", matchedTags.length);
    console.log("  👗 categoryBonus:", categoryBonus);
    console.log("  🌈 toneBonus:", extraToneScore);
    console.log("  📊 finalScore:", score);

    return { ...perfume, score, matchedTags };
  });

  const highestScore = Math.max(...scored.map(p => p.score));
  const topCandidates = scored.filter(p => p.score === highestScore);

  console.log("🥇 Kandidat dengan skor tertinggi:", topCandidates.map(p => `${p.name} (${p.score})`));

  const selected =
    topCandidates[Math.floor(Math.random() * topCandidates.length)];

  console.log("🎉 Parfum terpilih:", selected.name, "dengan skor", selected.score);

  return {
    ...selected,
    matchedTags: selected.matchedTags,
    score: selected.score,
  };
}
