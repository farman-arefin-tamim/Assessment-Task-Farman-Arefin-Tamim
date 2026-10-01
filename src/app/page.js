import CreatorCTA from "@/components/home/CreatorCTA";
import Featured from "@/components/home/Featured";
import Growth from "@/components/home/Growth";
import LearningPaths from "@/components/home/LearningPaths";
import Testimonials from "@/components/home/Testomonials";
import Header from "@/components/ui/Header";


export default function Home() {
  return (
    <div>
        <Header />
        <main className="flex-grow">
            <Featured />
            <LearningPaths />
            <Growth />
            <CreatorCTA />
            <Testimonials />
        </main>
    </div>
  );
}
