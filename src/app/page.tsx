import { Icon } from "@/components/icons";
import { Hero, Recommendation } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex items-center gap-2">
        <Icon name="orang" />
        <span>Parfum Orang Biasa</span>
      </div>
      <Recommendation />
    </main>
  );
}
