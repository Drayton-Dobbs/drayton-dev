import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drayton-Dev",
  description:
    "Explore Drayton's personal website featuring projects, blogs, and vlogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-main w-full flex flex-col items-center`}
      >
        <div className="max-w-[1024px] w-full">
          <Navbar />
        </div>

        <div className="h-[calc(100vh-60px)] max-w-[1024px] w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
