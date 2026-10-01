import Link from "next/link";
import Image from "next/image";
import { LuChartNoAxesColumnIncreasing, LuUsers, LuPlay } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import ShareButton from "./ShareButton";

const badge = "inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm text-gray-800";

const CourseHero = ({ course }) => (
    <div className="pt-10 w-full">
        <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
                <h1 className="font-semibold text-3xl leading-tight break-words text-white md:text-4xl">{course.fullTitle}</h1>
                <p className="text-white/90 mt-2 font-satoshi">{course.subtitle}</p>
                <p className="text-white/90 mt-4 text-sm font-satoshi">
                    by{" "}
                    <Link href={`/creators/${course.creator.slug}`} className="underline underline-offset-2">
                        {course.creator.name}
                    </Link>
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                    <span className={badge}><LuChartNoAxesColumnIncreasing /> {course.level}</span>
                    <span className={badge}>
                        <AiFillStar className="text-yellow-400" /> {course.rating.toFixed(1)} ({course.reviewCount} reviews)
                    </span>
                    <span className={badge}><LuUsers /> {course.students} Students</span>
                </div>
            </div>
            <div className="shrink-0"><ShareButton title={course.fullTitle} /></div>
        </div>

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-black/20">
            <Image
                src={course.thumbnail}
                alt={`${course.fullTitle} preview`}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
                priority
            />
            <button
                type="button"
                aria-label="Play preview"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-16 w-16 place-items-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/75 transition"
            >
                <LuPlay className="text-2xl ml-1" />
            </button>
        </div>
    </div>
);

export default CourseHero;
