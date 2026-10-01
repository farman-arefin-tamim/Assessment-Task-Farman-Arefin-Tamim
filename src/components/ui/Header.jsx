import Image from "next/image";
import ProgressCard from "./ProgressCard";
import HappyStudentsCard from "./HappyStudentsCard";


const Header = () => {
    return (
        <div className="grid-background relative min-h-[680px] bg-[#003BE2] w-full overflow-hidden md:min-h-[760px]">

            <div className="hero-text relative z-20 flex flex-col items-center gap-6 px-6 pt-14 text-center md:gap-8 md:pt-24">
                <div className="header-text text-center">
                    <h1 className="font-semibold text-4xl leading-tight text-white md:text-5xl">
                        Get Access to Hundreds <br className="hidden sm:block" />Courses Available
                    </h1>
                    <p className="mt-4 max-w-2xl text-white font-satoshi">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>
                </div>

                <div className="search-bar flex w-full max-w-xl flex-col justify-center items-stretch gap-2 sm:flex-row sm:items-center">
                    <label className="input min-w-0 border-2 border-white rounded-full px-4 py-2 flex items-center gap-2 w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow px-2" placeholder="Course, topic, creator" />
                    </label>
                    <button className="btn rounded-full bg-[#D4FB20] text-black sm:shrink-0">Search</button>
                </div>
            </div>

          
            <div className="visual relative mt-10 h-[390px] sm:mt-12 md:h-[500px]">
                <Image src="/images/hero/CenterEllipse.png" alt="Hero Image" width={1150} height={1150}
                    className="absolute bottom-0 left-1/2 z-0 w-[760px] max-w-none -translate-x-1/2 md:w-[1150px]" />
                <Image src="/images/hero/hero1.png" alt="Hero Image" width={578} height={541}
                    className="absolute bottom-0 left-1/2 z-10 w-[330px] max-w-none -translate-x-1/2 sm:w-[430px] md:w-[578px]" />
                <Image src="/images/hero/leftFrame.png" alt="Hero Image" width={200} height={200}
                    className="absolute left-0 top-1/4 z-10 hidden w-28 -translate-y-1/2 sm:block md:w-[200px]" />
                <Image src="/images/hero/rightFrame.png" alt="Hero Image" width={200} height={200}
                    className="absolute right-0 top-1/4 z-10 hidden w-28 -translate-y-1/2 sm:block md:w-[200px]" />

                <Image src="/images/hero/white-squigle1.png" alt="Hero Image" width={150} height={150}
                    className="absolute left-[12%] z-10 hidden w-24 -translate-y-1/4 md:block" />
                
                 <Image src="/images/hero/hero-ellipse.png" alt="Hero Image" width={300} height={150}
                    className="absolute left-2 z-10 top-[20%] hidden w-36 sm:block md:left-10 md:w-[300px]" />

                <Image src="/images/hero/white-squigle2.png" alt="Hero Image" width={250} height={200}
                    className="absolute right-[8%] bottom-20 z-10 hidden w-40 -translate-y-1/2 md:block" />

                
                <Image src="/images/hero/cone.png" alt="Hero Image" width={150} height={100}
                    className="absolute right-[25%] bottom-[90%] z-10 hidden w-24 md:block" />

                <div className="absolute left-1/2 top-[12%] z-20 -translate-x-1/2 md:left-[calc(50%+260px)] md:translate-x-0">
                     <ProgressCard label="Learning Progress" percent={55} />
                </div>
                <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 sm:left-[18%] sm:translate-x-0 md:bottom-20 md:left-[18%]">
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