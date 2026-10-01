import Image from "next/image";
import Link from "next/link";
import { LuBookOpen, LuVideo, LuAward, LuMessageCircle } from "react-icons/lu";

const includeIcons = [LuBookOpen, LuVideo, LuAward, LuMessageCircle];

const CourseSidebar = ({ course }) => {
    const preview = course.modules.slice(0, 3);
    const moreVideos = course.totalLessons - preview.length;

    return (
        <aside className="rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
            <h2 className="font-semibold text-lg">
                {course.totalLessons} Lessons <span className="text-gray-500 font-normal">({course.totalHours} hours)</span>
            </h2>

            <ul className="mt-4 flex flex-col gap-3 text-sm">
                {preview.map((m) => (
                    <li key={m.number} className="flex items-start gap-3">
                        <span className="text-gray-400">{String(m.number).padStart(2, "0")}</span>
                        <span className="grow">{m.title}</span>
                        <span className="text-[#003BE2] shrink-0">{m.minutes} min</span>
                    </li>
                ))}
            </ul>
            <p className="text-gray-400 text-xs mt-3">{moreVideos} more videos</p>

            <p className="text-gray-500 text-xs mt-5">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>
            <p className="mt-2">
                <span className="text-[#003BE2] text-3xl font-bold">${course.price}</span>
                <span className="text-gray-400 text-sm"> /lifetime</span>
            </p>
            <button type="button" className="btn w-full rounded-full bg-[#D4FB20] text-black border-none mt-4">
                Enroll Now
            </button>

            <h3 className="font-semibold mt-6">This course include</h3>
            <ul className="mt-3 flex flex-col gap-3 text-sm text-gray-600">
                {course.includes.map((item, i) => {
                    const Icon = includeIcons[i % includeIcons.length];
                    return (
                        <li key={item} className="flex items-center gap-3">
                            <Icon className="text-[#003BE2] text-lg" /> {item}
                        </li>
                    );
                })}
            </ul>

            <div className="mt-6 flex items-center gap-3">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <Image src="/images/avatars/1.png" alt={course.creator.name} width={40} height={40} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm capitalize">{course.creator.name.replace("purepearl", "PurePearl")}</p>
                    <p className="text-gray-500 text-xs">Professional Creator</p>
                </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>
            <Link
                href={`/creators/${course.creator.slug}`}
                className="btn btn-sm rounded-full bg-white border border-gray-300 shadow-none mt-4 font-normal"
            >
                See Full Profile
            </Link>
        </aside>
    );
};

export default CourseSidebar;
