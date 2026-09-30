import Image from "next/image";
import GrowthChecklist from "./GrowthChecklist";
import MiniStatCard from "@/components/ui/MiniStatCard";
// import HappyStudentsCard from "@/components/ui/HappyStudentsCard";

const GrowthRow2 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[450px] order-2 lg:order-1">
            <Image src="/images/brand/row2.png" alt="Creator"
                width={340} height={450}
                className="absolute bottom-0 left-8 z-0" />

            <div className="absolute top-0 left-0 z-10">
                <MiniStatCard label="Total Revenue" sublabel="Jul 1-28" value="$120.29" variant="dark" />
            </div>

            <div className="absolute top-[45%] left-0 z-10">
                <MiniStatCard label="Year to Date" sublabel="2023" value="$1,200.38" variant="dark" />
            </div>

            {/* <div className="absolute bottom-4 right-0 z-10">
                <HappyStudentsCard
                    rating={4.5} reviewCount={240}
                    avatars={["/images/avatars/1.jpg", "/images/avatars/2.jpg", "/images/avatars/3.jpg"]}
                    extraCount="2K"
                />
            </div> */}

            <Image src="/images/shapes/squiggle-lime.png" alt=""
                width={90} height={90}
                className="absolute top-[35%] right-8 -z-10" />
        </div>

        <div className="order-1 lg:order-2">
            <h2 className="font-semibold text-4xl">
                Create & Manage <br />Courses Easily.
            </h2>
            <p className="text-gray-500 mt-4 max-w-md">
                <strong>ByteSpace</strong> supports individuals or entities in the creation,
                publication, and administration of educational courses.
            </p>
            <GrowthChecklist />
        </div>
    </div>
);

export default GrowthRow2;