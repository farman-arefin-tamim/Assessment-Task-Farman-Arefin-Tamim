import { notFound } from "next/navigation";
import courses from "@/data/courses.json";
import { getCourseDetail } from "@/data/courseDetails";
import CourseHero from "@/components/course-detail/CourseHero";
import CourseSidebar from "@/components/course-detail/CourseSidebar";
import CourseTabs from "@/components/course-detail/CourseTabs";

export function generateStaticParams() {
    return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);
    if (!course) return { title: "Course not found | ByteSpace" };
    return { title: `${getCourseDetail(course).fullTitle} | ByteSpace` };
}

export default async function CoursePage({ params }) {
    const { slug } = await params;
    const base = courses.find((c) => c.slug === slug);
    if (!base) notFound();
    const course = getCourseDetail(base);

    return (
        <div className="relative">
            {/* blue band behind the title + video; the sidebar card overflows below it */}
            <div className="grid-background absolute inset-x-0 top-0 h-[480px] md:h-[620px] bg-[#003BE2]" aria-hidden />

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-x-10">
                <div className="px-6 lg:px-0 lg:col-start-1">
                    <CourseHero course={course} />
                </div>

                <div className="px-6 lg:px-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 mt-8 lg:mt-[160px] relative z-10">
                    <div className="lg:sticky lg:top-6">
                        <CourseSidebar course={course} />
                    </div>
                </div>

                <div className="px-6 lg:px-0 lg:col-start-1 mt-10 pb-20">
                    <CourseTabs course={course} />
                </div>
            </div>
        </div>
    );
}
