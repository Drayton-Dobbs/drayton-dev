import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
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
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={`${inter.className} bg-white dark:bg-main w-full flex flex-col items-center`}
        style={{}}
      >
        <div className="max-w-[716px] w-full flex flex-col flex-grow">
          <Navbar />
          <div className="flex-grow overflow-y-auto pb-6">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
