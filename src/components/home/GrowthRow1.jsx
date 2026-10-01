import Image from "next/image";
import GrowthStats from "@/components/home/GrowthStats";
import ProgressCard from "@/components/ui/ProgressCard";

const GrowthRow1 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="font-semibold text-4xl">
                Your Path to Professional <br />Growth Starts Here!
            </h2>
            <p className="text-gray-500 mt-4 max-w-md">
                Explore our curated selection of courses tailored to enhance your capabilities and
                accelerate your career journey. Whether you are looking to sharpen specific skills,
                gain industry expertise, or embark on a new career path entirely, we have the
                resources you need.
            </p>
            <GrowthStats />
        </div>
       
        <div className="relative h-[400px]">
           
            <Image src="/images/brand/course-card-crop.png" alt="Student with laptop"
                width={300} height={350}
                className="absolute bottom-10 right-20 z-0" />

            
             <Image src="/images/hero/hero1.png" alt="Student with laptop"
                width={400} height={400}
                className="absolute -bottom-10 -right-15 z-10" />
           

           
            <div className="absolute top-[50%] -right-18 z-20">
                <ProgressCard label="Learning Progress" percent={55} />
            </div>

            
        </div>
    </div>
);

export default GrowthRow1;