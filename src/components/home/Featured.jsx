import PartnersStrip from "./PartnersStrip";
import CategoryPills from "@/components/filters/CategoryPills";
import CourseGrid from "@/components/course/CourseGrid";
import courses from "@/data/courses.json";

const categories = [
    { id: "featured", name: "Featured", active: true },
    { id: "music", name: "Music" },
    { id:"Drawing & Painting", name:"Drawing & Painting"},
    { id:"Marketing", name:"Marketing"},
    { id:"Animation", name:"Animation"},
    { id:"Social Media", name:"Social Media"},
    { id:"UI/UX Design", name:"UI/UX Design"},
    { id:"Creative Marketing", name:"Creative Marketing"},
    { id:"Digital Illustration", name:"Digital Illustration"},
    { id:"Film & Video", name:"Film & Video"},
    { id:"Crafts", name:"Crafts"},
    { id:"Freelance & Entrepreneurship", name:"Freelance & Entrepreneurship"},
    { id:"Graphic Design", name:"Graphic Design"},
    { id:"Photography", name:"Photography"},
    { id:"Productivity", name:"Productivity"},
    { id:"Web Development", name:"Web Development"},
    { id:"Data Science", name:"Data Science"},
    { id:"Cooking", name:"Cooking"},
    
];

const Featured = () => {
    return (
        <div>
            <PartnersStrip />

            <div className="py-20">
                <div className="text-center max-w-2xl mx-auto">
                         <h2 className="font-semibold text-4xl">Discover Your Passion, <br/>Build Your Skills</h2>
                        <p className="text-gray-500 mt-4">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
                    </div>
                <div className="mt-10">
                    <CategoryPills categories={categories} />
                </div>

                 <div className="mt-12">
                    <CourseGrid courses={courses.slice(0, 6)} />
                </div>
            </div>
        </div>
    );
};

export default Featured;