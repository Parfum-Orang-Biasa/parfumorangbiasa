import { Icon } from "@/components/icons";
import { Hero, Recommendation } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="flex items-center gap-2">
        <Icon name="orang" />
        <span>Parfum Orang Biasa</span>
      </div>
      <Link href="/catalog">catalog</Link>
      <Recommendation />
    </main>
  );
}
