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

const LearningPathCard = ({ name, icon }) => {
    const Icon = iconMap[icon];

    return (
        <div className="card border border-gray-200 p-6 items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#D4FB20] flex items-center justify-center">
                <Icon className="text-xl" />
            </div>
            <p className="font-medium mt-4">{name}</p>
        </div>
    );
};

export default LearningPathCard;