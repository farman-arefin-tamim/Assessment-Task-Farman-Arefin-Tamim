"use client";
import { useState } from "react";

const CategoryPills = ({ categories }) => {
    const [active, setActive] = useState(categories[0]?.id);

    return (
        <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`btn btn-sm rounded-full border-none ${
                        active === cat.id ? "bg-[#D4FB20] text-black" : "bg-gray-100 text-gray-700"
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryPills;