"use client";
import { useMemo, useRef, useState } from "react";
import CoursesHero from "./CoursesHero";
import FilterBar from "@/components/filters/FilterBar";
import CategoryPills from "@/components/filters/CategoryPills";
import CourseGrid from "@/components/course/CourseGrid";

const CoursesBrowser = ({ courses, categories }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("featured");
    const [level, setLevel] = useState("All levels");
    const [sort, setSort] = useState("relevant");
    const pillsRef = useRef(null);

    const visible = useMemo(() => {
        const q = search.trim().toLowerCase();
        let list = courses.filter((c) => {
            if (q && !c.title.toLowerCase().includes(q) && !c.creator.name.toLowerCase().includes(q)) return false;
            if (category !== "featured" && !c.categories?.includes(category)) return false;
            if (level !== "All levels" && c.level !== level) return false;
            return true;
        });
        const sorters = {
            rating: (a, b) => b.rating - a.rating,
            "price-asc": (a, b) => a.price - b.price,
            "price-desc": (a, b) => b.price - a.price,
            title: (a, b) => a.title.localeCompare(b.title),
        };
        if (sorters[sort]) list = [...list].sort(sorters[sort]);
        return list;
    }, [courses, search, category, level, sort]);

    const reset = () => {
        setSearch("");
        setCategory("featured");
        setLevel("All levels");
        setSort("relevant");
    };

    return (
        <>
            <CoursesHero search={search} onSearchChange={setSearch} />

            <div className="max-w-6xl mx-auto px-6 py-12 w-full">
                <FilterBar
                    level={level}
                    onLevelChange={setLevel}
                    sort={sort}
                    onSortChange={setSort}
                    onReset={reset}
                    onCategoryClick={() => pillsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
                />

                <div className="mt-6" ref={pillsRef}>
                    <CategoryPills categories={categories} active={category} onChange={setCategory} align="left" />
                </div>

                <div className="mt-10">
                    {visible.length ? (
                        <CourseGrid courses={visible} />
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-lg font-semibold text-gray-700">No courses found</p>
                            <p className="mt-1 text-sm">Try a different search or clear your filters.</p>
                            <button type="button" onClick={reset} className="btn btn-sm rounded-full bg-[#D4FB20] text-black border-none mt-4">
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CoursesBrowser;
