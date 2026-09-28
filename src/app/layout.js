import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Bold.woff2",
  weight: "700",
  style: "normal",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Light.woff2",
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
