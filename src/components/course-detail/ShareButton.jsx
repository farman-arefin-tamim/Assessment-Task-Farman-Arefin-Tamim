"use client";
import { useState } from "react";
import { LuShare2 } from "react-icons/lu";

const ShareButton = ({ title }) => {
    const [copied, setCopied] = useState(false);

    const share = async () => {
        const url = window.location.href;
        try {
            if (navigator.share) {
                await navigator.share({ title, url });
                return;
            }
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* share dialog dismissed */
        }
    };

    return (
        <button type="button" onClick={share} className="btn btn-sm rounded-full bg-[#D4FB20] text-black border-none gap-2">
            <LuShare2 /> {copied ? "Link copied" : "Share"}
        </button>
    );
};

export default ShareButton;
