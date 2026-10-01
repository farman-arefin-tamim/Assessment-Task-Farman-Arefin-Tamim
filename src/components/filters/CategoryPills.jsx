"use client";
import { useState } from "react";


const CategoryPills = ({ categories, active, onChange, align = "center" }) => {
    const [inner, setInner] = useState(categories[0]?.id);
    const current = active ?? inner;
    const select = (id) => {
        setInner(id);
        onChange?.(id);
    };

    return (
        <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => select(cat.id)}
                    className={`btn btn-sm rounded-full border-none ${
                        current === cat.id ? "bg-[#D4FB20] text-black" : "bg-gray-100 text-gray-700"
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryPills;
