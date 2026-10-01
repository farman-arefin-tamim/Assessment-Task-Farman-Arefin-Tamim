"use client";
import { LuListFilter, LuChartNoAxesColumnIncreasing, LuShapes, LuArrowUpNarrowWide } from "react-icons/lu";

const pill = "btn btn-sm rounded-full bg-white border border-gray-300 font-normal text-gray-800 shadow-none gap-2";

export const sortOptions = [
    { id: "relevant", label: "Most relevant" },
    { id: "rating", label: "Highest rated" },
    { id: "price-asc", label: "Price: low to high" },
    { id: "price-desc", label: "Price: high to low" },
    { id: "title", label: "Title A–Z" },
];
const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];

const FilterBar = ({ level, onLevelChange, sort, onSortChange, onReset, onCategoryClick }) => (
    <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-3">
            <button type="button" className={pill} onClick={onReset}>
                <LuListFilter /> Filter
            </button>

            <div className="dropdown">
                <button type="button" tabIndex={0} className={pill}>
                    <LuChartNoAxesColumnIncreasing /> {level === "All levels" ? "Level" : level}
                </button>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-48 p-2 shadow-lg border border-gray-100">
                    {levels.map((l) => (
                        <li key={l}><button type="button" onClick={() => { onLevelChange(l); document.activeElement?.blur(); }}>{l}</button></li>
                    ))}
                </ul>
            </div>

            <button type="button" className={pill} onClick={onCategoryClick}>
                <LuShapes /> Category
            </button>
        </div>

        <div className="dropdown dropdown-end">
            <button type="button" tabIndex={0} className={pill}>
                <LuArrowUpNarrowWide /> {sortOptions.find((s) => s.id === sort)?.label}
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-lg border border-gray-100">
                {sortOptions.map((s) => (
                    <li key={s.id}><button type="button" onClick={() => { onSortChange(s.id); document.activeElement?.blur(); }}>{s.label}</button></li>
                ))}
            </ul>
        </div>
    </div>
);

export default FilterBar;
