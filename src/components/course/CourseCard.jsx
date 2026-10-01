import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
    return (
        <div className="card min-w-0 bg-base-100 shadow-sm border border-gray-100 rounded-2xl">
            
            <figure className="relative">
                <Link href={`/courses/${course.slug}`} className="block w-full">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={400}
                    height={220}
                    className="w-full h-[220px] object-cover"
                />
                </Link>
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                    <span className="badge badge-neutral bg-black/60 border-none text-white text-xs">
                        {course.lessonCount} Lessons
                    </span>
                    <span className="badge badge-neutral bg-black/60 border-none text-white text-xs">
                        {course.duration}
                    </span>
                    <span className="badge badge-neutral bg-black/60 border-none text-white text-xs">
                        {course.commentCount} Comments
                    </span>
                </div>
            </figure>

            <div className="card-body gap-2">
               
                <div className="flex items-start justify-between gap-2">
                    <h3 className="min-w-0 font-semibold text-lg break-words">
                        <Link href={`/courses/${course.slug}`} className="hover:text-primary">{course.title}</Link>
                    </h3>
                    <div className="flex items-center gap-1 shrink-0">
                        <span>{course.rating}</span>
                        <span className="text-yellow-400">★</span>
                    </div>
                </div>

               
                <Link href={`/creators/${course.creator.slug}`} className="text-primary text-sm">
                    by {course.creator.name}
                </Link>

              
                <div className="flex items-center justify-between mt-2">
                    <span className="badge badge-outline rounded-full">{course.level}</span>
                    <div className="avatar-group -space-x-3">
                        {course.studentAvatars.map((src, i) => (
                            <div key={i} className="avatar">
                                <div className="w-6">
                                    <Image src={src} alt="student" width={24} height={24} />
                                </div>
                            </div>
                        ))}
                        <div className="avatar avatar-placeholder">
                            <div className="bg-[#D4FB20] text-black w-6 text-xs">
                                <span>{course.extraStudentCount}+</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <p className="mt-2">
                    <span className="text-primary text-xl font-bold">${course.price}</span>
                    <span className="text-gray-400 text-sm"> /lifetime</span>
                </p>
            </div>
        </div>
    );
};

export default CourseCard;