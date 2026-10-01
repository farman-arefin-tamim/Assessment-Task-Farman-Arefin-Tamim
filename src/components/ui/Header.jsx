import Image from "next/image";
import ProgressCard from "./ProgressCard";
import HappyStudentsCard from "./HappyStudentsCard";


const Header = () => {
    return (
        <div className="grid-background relative bg-[#003BE2] w-full h-[130vh] overflow-hidden">

            <div className="hero-text flex flex-col items-center gap-8 relative z-20 pt-24">
                <div className="header-text text-center">
                    <h1 className="font-semibold text-5xl text-white">
                        Get Access to Hundreds <br />Courses Available
                    </h1>
                    <p className="text-white mt-4 font-satoshi">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>
                </div>

                <div className="search-bar flex justify-center items-center gap-2">
                    <label className="input border-2 border-white rounded-full px-4 py-2 flex items-center gap-2 w-[400px]">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow px-2" placeholder="Course, topic, creator" />
                    </label>
                    <button className="btn rounded-full bg-[#D4FB20] text-black">Search</button>
                </div>
            </div>

          
            <div className="visual relative mt-12 h-[500px]">
                <Image src="/images/hero/CenterEllipse.png" alt="Hero Image" width={1150} height={1150}
                    className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2" />
                <Image src="/images/hero/hero1.png" alt="Hero Image" width={578} height={541}
                    className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2" />
                <Image src="/images/hero/leftFrame.png" alt="Hero Image" width={200} height={200}
                    className="absolute left-0 z-10 -translate-y-1/2" />
                <Image src="/images/hero/rightFrame.png" alt="Hero Image" width={200} height={200}
                    className="absolute right-0 z-10 -translate-y-1/2" />

                <Image src="/images/hero/white-squigle1.png" alt="Hero Image" width={150} height={150}
                    className="absolute left-60 z-10 -translate-y-1/4" />
                
                 <Image src="/images/hero/hero-ellipse.png" alt="Hero Image" width={300} height={150}
                    className="absolute left-10 z-10 top-[20%]" />

                <Image src="/images/hero/white-squigle2.png" alt="Hero Image" width={250} height={200}
                    className="absolute right-30 bottom-20 z-10 -translate-y-1/2" />

                
                <Image src="/images/hero/cone.png" alt="Hero Image" width={150} height={100}
                    className="absolute right-70 bottom-[90%] z-10" />

                <div className="absolute top-[20%] left-200 z-20">
                     <ProgressCard label="Learning Progress" percent={55} />
                </div>
                <div className="absolute bottom-20 left-60 z-20">
                                <HappyStudentsCard
                                    rating={4.5} reviewCount={240}
                                    avatars={["/images/avatars/1.png", "/images/avatars/2.png", "/images/avatars/3.png"]}
                                    extraCount="2K"
                                />
                </div>

                
            </div>
        </div>
    );
};

export default Header;