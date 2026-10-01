"use client";
import { useState } from "react";
import Image from "next/image";
import { LuCheck, LuVideo } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { ratingBreakdown } from "@/data/courseDetails";

const tabs = [
    { id: "about", label: "About" },
    { id: "lessons", label: "Lessons" },
    { id: "reviews", label: "Reviews" },
];

const Stars = ({ count = 5, className = "" }) => (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar key={i} className={i < count ? "text-yellow-400" : "text-gray-200"} />
        ))}
    </span>
);

const H = ({ children }) => <h2 className="font-semibold text-lg mt-8 first:mt-0">{children}</h2>;
const P = ({ children, className = "" }) => <p className={`text-gray-600 text-sm leading-relaxed ${className}`}>{children}</p>;

const About = ({ course }) => (
    <div>
        <H>Description</H>
        <div className="mt-3 flex flex-col gap-4">
            {course.description.map((p, i) => <P key={i}>{p}</P>)}
        </div>

        <H>Sneak Peek</H>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {course.sneakPeek.map((src, i) => (
                <div
                    key={src}
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl ${i === course.sneakPeek.length - 1 ? "ring-2 ring-green-500" : ""}`}
                >
                    <Image src={src} alt={`Sneak peek ${i + 1}`} fill sizes="200px" className="object-cover" />
                </div>
            ))}
        </div>

        <H>Key Points</H>
        <ul className="mt-3 flex flex-col gap-3">
            {course.keyPoints.map((k) => (
                <li key={k} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#003BE2] text-white"><LuCheck className="text-xs" /></span>
                    {k}
                </li>
            ))}
        </ul>
    </div>
);

const Lessons = ({ course }) => (
    <div>
        <H>Explore the Modules</H>
        <P className="mt-3">
            Immerse yourself in the course content as you walk through each module. This comprehensive
            breakdown provides practical insights and hands-on exercises.
        </P>

        <H>Lesson List</H>
        <ul className="mt-4 flex flex-col gap-5">
            {course.modules.map((m) => (
                <li key={m.number} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#D4FB20] text-black">
                        <LuVideo className="text-lg" />
                    </span>
                    <div>
                        <h3 className="font-semibold text-sm">Module {m.number}: {m.title}</h3>
                        <P className="mt-1">{m.description}</P>
                    </div>
                </li>
            ))}
        </ul>

        <H>Lesson Content</H>
        <P className="mt-3">
            Engage with each lesson through captivating video content, detailed textual explanations, and
            interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </P>

        <H>Lesson Progress Tracking</H>
        <P className="mt-3">
            Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
            through your learning journey.
        </P>
        <div className="mt-4 rounded-xl border border-gray-200 p-4">
            <p className="text-gray-500 text-xs">Learning Progress</p>
            <p className="text-2xl font-bold mt-1">{course.progress}%</p>
            <progress className="progress w-full mt-2" style={{ color: "#CBFC01", accentColor: "#CBFC01" }} value={course.progress} max="100" />
        </div>
    </div>
);

const Reviews = ({ course }) => {
    const max = Math.max(...ratingBreakdown.map((r) => r.count));
    return (
        <div>
            <H>What Learners Are Saying</H>
            <P className="mt-3">
                Discover what our learners have to say about their experience with "{course.fullTitle}".
                Read honest feedback and ratings from real students who have completed the course.
            </P>

            <div className="mt-5 flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-gray-200 p-5">
                <div className="grid place-items-center rounded-xl bg-[#D4FB20] px-6 py-4 text-center">
                    <p className="text-xs text-black/70">Rating</p>
                    <p className="text-4xl font-bold">{course.rating.toFixed(1)}</p>
                </div>
                <ul className="grow w-full flex flex-col gap-1.5">
                    {ratingBreakdown.map((r) => (
                        <li key={r.stars} className="flex items-center gap-3 text-xs text-gray-500">
                            <progress className="progress w-full" style={{ color: "#D4FB20", accentColor: "#D4FB20" }} value={r.count} max={max} />
                            <Stars count={r.stars} className="shrink-0" />
                            <span className="w-8 text-right">{r.count}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <H>Individual Reviews</H>
            <ul className="mt-4 flex flex-col gap-4">
                {course.reviews.map((r) => (
                    <li key={r.id} className="rounded-xl border border-gray-200 p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-9 rounded-full">
                                        <Image src={r.avatar} alt={r.name} width={36} height={36} />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{r.name}</p>
                                    <p className="text-gray-500 text-xs">{r.role}</p>
                                </div>
                            </div>
                            <span className="text-gray-400 text-xs">{r.when}</span>
                        </div>
                        <Stars className="mt-3" />
                        <P className="mt-2">{r.text}</P>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CourseTabs = ({ course }) => {
    const [active, setActive] = useState("about");

    return (
        <section>
            <div role="tablist" className="flex gap-2">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        role="tab"
                        aria-selected={active === t.id}
                        onClick={() => setActive(t.id)}
                        className={`btn btn-sm rounded-full border-none ${active === t.id ? "bg-[#D4FB20] text-black" : "bg-gray-100 text-gray-700"}`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="mt-6" role="tabpanel">
                {active === "about" && <About course={course} />}
                {active === "lessons" && <Lessons course={course} />}
                {active === "reviews" && <Reviews course={course} />}
            </div>
        </section>
    );
};

export default CourseTabs;
