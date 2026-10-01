import Image from "next/image";

const HappyStudentsCard = ({ rating, reviewCount, avatars, extraCount }) => (
    <div className="card bg-base-100 shadow-lg p-4 w-[200px]">
        <p className="font-semibold text-sm">Happy Students</p>
        <div className="flex items-center gap-1 mt-1">
            <span className="text-sm">{rating}</span>
            <span className="text-gray-400 text-xs">({reviewCount})</span>
            <span className="text-yellow-400 text-xs">★</span>
        </div>
        <div className="avatar-group -space-x-3 mt-3">
            {avatars.map((src, i) => (
                <div key={i} className="avatar">
                    <div className="w-7">
                        <Image src={src} alt="student" width={28} height={28} />
                    </div>
                </div>
            ))}
            <div className="avatar avatar-placeholder">
                <div className="bg-[#D4FB20] text-black w-7 text-xs">
                    <span>{extraCount}+</span>
                </div>
            </div>
        </div>
    </div>
);

export default HappyStudentsCard;