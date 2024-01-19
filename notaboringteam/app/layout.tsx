import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ResNav from "@/components/main/ResNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not A Boring team - Home",
  description: "Men for men",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {/* <ResNav/> */}
        {children}
        <Footer />2
      </body>
    </html>
  );
}
