import { LuChevronDown } from "react-icons/lu";

const CoursesHero = ({ search, onSearchChange }) => (
    <div className="grid-background relative bg-[#003BE2] px-6 pt-16 pb-16">
        <h1 className="font-semibold text-3xl text-white text-center">
            Find Your Next Course
        </h1>

        <div className="flex justify-center items-center gap-2 mt-8">
            <label className="input border-2 border-white rounded-full px-4 py-2 flex items-center gap-2 w-full max-w-[400px] bg-white">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    type="search"
                    className="grow px-2"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </label>
            <button type="button" className="btn rounded-full bg-[#D4FB20] text-black border-none gap-1">
                Courses <LuChevronDown />
            </button>
        </div>
    </div>
);

export default CoursesHero;
