import CreatorCTA from "@/components/home/CreatorCTA";
import Featured from "@/components/home/Featured";
import Testimonials from "@/components/home/Testomonials";
import Header from "@/components/ui/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Header />
        <main className="flex-grow">
            <Featured />
            <CreatorCTA />
            <Testimonials />
        </main>
    </div>
  );
}
