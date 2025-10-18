import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import TopNavBar from "@/components/TopNavBar";

export default function Home() {
  return (
    <main className="font-space">
      <TopNavBar />
      <HeroSection />
      <MainSection />
    </main>
  );
}
