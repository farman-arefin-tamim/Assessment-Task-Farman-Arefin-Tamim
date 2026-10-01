import CoursesBrowser from "@/components/courses/CoursesBrowser";
import courses from "@/data/courses.json";

export const metadata = { title: "Courses | ByteSpace" };

const categories = [
    { id: "featured", name: "Featured" },
    { id: "music", name: "Music" },
    { id: "drawing-painting", name: "Drawing & Painting" },
    { id: "marketing", name: "Marketing" },
    { id: "animation", name: "Animation" },
    { id: "social-media", name: "Social Media" },
    { id: "ui-ux", name: "UI/UX Design" },
    { id: "creative-marketing", name: "Creative Marketing" },
    { id: "cooking", name: "Cooking" },
];

export default function CoursesPage() {
    return <CoursesBrowser courses={courses} categories={categories} />;
}
