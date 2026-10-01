import Link from "next/link";

export const metadata = { title: "Page not found | ByteSpace" };

export default function NotFound() {
    return (
        <main className="grid-background relative flex flex-grow flex-col items-center justify-center overflow-hidden bg-[#003BE2] px-6 py-20 text-center">
            <p
                aria-hidden
                className="font-clash-display font-bold leading-none text-[160px] sm:text-[240px] md:text-[320px] bg-gradient-to-b from-[#D4FB20] via-[#D4FB20]/60 to-transparent bg-clip-text text-transparent select-none"
            >
                404
            </p>

            <div className="relative -mt-16 sm:-mt-24 md:-mt-32">
                <h1 className="mx-auto max-w-xl text-3xl md:text-4xl font-semibold text-white">
                    The page you are looking for doesn&apos;t exist
                </h1>
                <p className="mt-4 text-sm text-white/80 font-satoshi">
                    Try to use a new link or go back to homepage to start again
                </p>
                <Link href="/" className="btn mt-8 rounded-full border-none bg-[#D4FB20] text-black">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
