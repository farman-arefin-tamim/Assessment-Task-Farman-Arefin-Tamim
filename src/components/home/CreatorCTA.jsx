import Image from "next/image";

const CreatorCTA = () => {
    return (
        <section className="grid-background relative bg-[#003BE2] overflow-hidden py-24 px-6">
            <Image src="/images/shapes/squiggle-lime.png" alt="" width={140} height={140}
                className="absolute top-0 left-0 z-0" />
            <Image src="/images/shapes/squiggle-white.png" alt="" width={100} height={100}
                    className="absolute top-15 left-[15%] z-0" />
            <Image src="/images/shapes/cone-lime.png" alt="" width={110} height={110}
                className="absolute top-8 right-[12%] z-0" />
            <Image src="/images/shapes/cylinder-white.png" alt="" width={130} height={130}
                className="absolute top-30 right-0 z-0" />
            <Image src="/images/shapes/triangle-white.png" alt="" width={150} height={150}
                className="absolute bottom-10 left-0 z-0" />
            <Image src="/images/shapes/squiggle-lime-bottom.png" alt="" width={130} height={130}
                className="absolute bottom-0 right-[15%] z-0" />
                <Image src="/images/shapes/torus-lime-bottom.png" alt="" width={320} height={130}
                className="absolute bottom-0 left-[10%] z-0" />


            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="font-semibold text-4xl text-white">
                    Unlock Your Potential as a <br />Creator with ByteSpace
                </h2>
                <p className="text-white/80 text-sm mt-6">
                    Experience the collaboration of numerous creators and an expanding selection of
                    courses. Register now and become a part of a community comprising over 10,000
                    local and international creators. Utilize our Course Editor, and showcase your
                    expertise by publishing your finest course on the ByteSpace Course Library.
                </p>
                <button className="btn rounded-full bg-[#D4FB20] text-black border-none mt-8">
                    Join as Creator
                </button>
            </div>
        </section>
    );
};

export default CreatorCTA;