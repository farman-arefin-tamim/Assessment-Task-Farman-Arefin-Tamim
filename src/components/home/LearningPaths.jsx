import {
    LuPaintbrush,
    LuSmartphone,
    LuLaptop,
    LuBuilding2,
    LuMegaphone,
    LuCamera,
} from "react-icons/lu";


const iconMap = {
    design: LuPaintbrush,
    development: LuSmartphone,
    itSoftware: LuLaptop,
    business: LuBuilding2,
    marketing: LuMegaphone,
    photography: LuCamera,
};

const paths = [
  { "id": "design", "name": "Design", "icon": "design" },
  { "id": "development", "name": "Development", "icon": "development" },
  { "id": "it-software", "name": "IT & Software", "icon": "itSoftware" },
  { "id": "business", "name": "Business", "icon": "business" },
  { "id": "marketing", "name": "Marketing", "icon": "marketing" },
  { "id": "photography", "name": "Photography", "icon": "photography" }
];


const LearningPaths = () => (
    <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-semibold text-3xl">
                Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-gray-700 mt-4 font-satoshi">
                At Bytespace, we believe in empowering individuals through knowledge. Our diverse
                range of courses spans various fields, ensuring there's something for everyone.
                Unleash your potential and explore our carefully curated categories.
            </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {paths.map((p) => {
                const Icon = iconMap[p.icon];
                return (
                    <div
                        key={p.id}
                        className="card border border-gray-200 p-6 items-center text-center hover:shadow-md transition-shadow"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#D4FB20] flex items-center justify-center">
                            <Icon className="text-xl" />
                        </div>
                        <p className="font-medium mt-4">{p.name}</p>
                    </div>
                );
            })}
        </div>
    </section>
);

export default LearningPaths;