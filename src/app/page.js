import Featured from "@/components/home/Featured";
import Header from "@/components/ui/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Header />
        <main className="flex-grow">
            <Featured />
        </main>
    </div>
  );
}
