// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Navbar from "./components/Navbar/navbar";
// import Footer from "./components/Footer/Footer";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Drayton-Dev",
//   description:
//     "Explore Drayton's personal website featuring projects, blogs, and vlogs.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${inter.className} bg-main w-full flex flex-col items-center`}
//       >
//         <div className="max-w-[716px] w-full">
//           <Navbar />
//         </div>

//         <div className="h-[calc(100vh-60px)] max-w-[716px] w-full ">
//           {children}
//         </div>
//         <Footer />
//       </body>
//     </html>
//   );
// }

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
        className={`${inter.className} bg-main w-full flex flex-col items-center`}
        style={{ height: "100%" }}
      >
        <div className="max-w-[716px] w-full flex flex-col flex-grow">
          <Navbar />
          <div className="flex-grow overflow-y-auto">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
