import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="text-white">
      <div className="py-4 flex justify-between items-center">
        <span className="font-bold text-6xl bg-gradient-to-r from-teal-500 to-green-500 text-transparent bg-clip-text">
          About Me
        </span>
        <div className="h-36 w-36 rounded-full bg-white overflow-hidden relative">
          <Image
            src={"/Drayton-Pro.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Picture of Author, Drayton."
            className="rounded-full"
          />
        </div>
      </div>
      <p className="tracking-wide">
        Hey there, I&apos;m Drayton! Thanks for visiting my corner of the
        internet. Let me share a bit about my journey into the world of web
        development.{" "}
      </p>{" "}
      <div className="flex justify-start">
        <div className="border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide">
        Growing up in poverty, I was determined to break the cycle and strive
        for more. When I was younger (15-17), I used to help my dad with his
        cleaning business. One day, while cleaning a financial office, I saw
        these cool monitors with graphs and heat maps all over the wall—numbers,
        data, and bright colors everywhere. That moment sparked my interest in
        coding and app design.
      </p>{" "}
      <div className="flex justify-start">
        <div className="border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide">
        Back then, I had no real way to dive into coding until, a few years
        later, I stumbled upon a free web development bootcamp called{" "}
        <Link href={"https://www.linkedin.com/company/innovatebirmingham/"}>
          <span className="py-4 font-bold text-lg bg-gradient-to-r from-teal-500 to-green-500 text-transparent bg-clip-text">
            IamBham - Innovate Birmingham
          </span>
        </Link>
        . In the beginning, I thought this industry would definitely be more
        lucrative than being a server. So financial gain was my main reason for
        exploring this industry until I eventually (as soon as I learned CSS
        haha) found a love for designing well-made responsive apps.
      </p>{" "}
      <div className="flex justify-start">
        <div className="border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide ">
        Over the past five years, I&apos;ve honed my skills and expertise in key
        areas of web development. I specialize in JavaScript (JS), TypeScript
        (TS), Node.js, and React/Next.js, leveraging these technologies to build
        dynamic and responsive web applications. My experience includes a
        four-month intensive learning through the IAmBham web development
        course, followed by a year of hands-on experience applying for jobs and
        refining my skills.
      </p>{" "}
      <div className="flex justify-start">
        <div className="border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide ">
        {" "}
        In late 2019, I found my first job in the field at{" "}
        <Link href={"https://mossrock.com"}>
          <span className="py-4 font-bold text-lg bg-gradient-to-r from-teal-500 to-green-500 text-transparent bg-clip-text">
            Moss Rock Solutions
          </span>
        </Link>
        , formerly known as Scott Howard Consulting, where I&apos;ve had the
        privilege of contributing to impactful projects and expanding my
        knowledge in the tech industry. This journey has not only shaped me as a
        developer and human but also instilled in me a passion for creating
        innovative solutions and pushing the boundaries of what&apos;s possible
        in web development.{" "}
      </p>{" "}
      <div className="flex justify-start">
        <div className="border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide">
        {" "}
        I&apos;m excited to share my experiences and insights with you, and I
        invite you to explore more about my work and connect with me to discuss
        all things tech and beyond.
      </p>
    </div>
  );
}
