import Image from "next/image";


const Header = () => {
    return (
        <div
            className="grid-background relative bg-[#003BE2] w-full h-[100vh] overflow-hidden"
        >
            <div>
                <h1 className="font-semibold text-5xl text-white text-center">Get Access to Hundreds <br />Courses Available</h1>
                <p className="text-white text-center mt-4">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
            </div>
            <div className="search-bar flex justify-center items-center mt-8 my-4 gap-4">
                    <label className="input border-2 border-white rounded-full px-4 py-2 flex items-center gap-2 w-[400px] z-10 ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" className="grow" placeholder="Course, topic, creator" />
                                
                        </label>
            </div>
            <Image
                src="/images/hero/CenterEllipse.png"
                alt="Hero Image"
                width={1150}
                height={1150}
                className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
            />

            <Image 
                src="/images/hero/hero1.png"
                alt="Hero Image"
                width={578}
                height={541}
                className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
            />
           <Image
                src="/images/hero/leftFrame.png"
                alt="Hero Image"
                width={200}
                height={200}
                className="absolute bottom-0 left-0 top-[50%] z-10 -translate-y-1/2"
            />

            <Image
                src="/images/hero/rightFrame.png"
                alt="Hero Image"
                width={200}
                height={200}
                className="absolute bottom-0 right-0 top-[50%] z-10 -translate-y-1/2"
            />
        </div>
    );
};

export default Header;