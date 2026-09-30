import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Bold.woff2",
  variable: "--font-clash-display",
  weight: "700",
  style: "normal",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Light.woff2",
  variable: "--font-satoshi",
  weight: "100 700",
  style: "normal",
});


export const metadata = {
  title: "ByteSpace",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
