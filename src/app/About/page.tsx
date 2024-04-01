import Link from "next/link";

export default function About() {
  return (
    <div className="text-white">
      <div className="py-4 pl-5 font-bold text-4xl sm:text-7xl bg-gradient-to-r from-teal-500 to-green-500 text-transparent bg-clip-text">
        About Me
      </div>
      <p className="tracking-wide text-gray-500 px-6">
        Hey there, I&apos;m Drayton! Thanks for visiting my corner of the
        internet. Let me share a bit about my journey into the world of web
        development.{" "}
      </p>{" "}
      <div className="flex justify-start">
        <div className="mx-6 border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide text-gray-500 px-6">
        Growing up in poverty, I was determined to break the cycle and strive
        for more. When I was younger, I used to help my dad with his cleaning
        business. We cleaned all sorts of offices in Birmingham Alabama: law,
        financial, sports medicine, and various other offices. Coming from a
        small town with a population, at the time, of sub two thousand, I was
        fascinated by all the tech. Computers with different GUI&apos;s, charts,
        graphs, schedules. I just found it all so neat. In particular, a
        financial office with bright colored stock market graphs all over the
        wall. Always having an intrest in math and science, I was quite
        interested in creating these things for myself. I just didn&apos;t know
        where to start.
      </p>{" "}
      <div className="flex justify-start">
        <div className="mx-6 border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide text-gray-500 px-6">
        Back then, I had no real way to dive into coding until, years later,
        after being in the service industry for almost five years. I was
        introduced, by a good friend, to a free web development bootcamp called{" "}
        <Link href={"https://www.linkedin.com/company/innovatebirmingham/"}>
          <span className="py-4 font-bold text-lg bg-gradient-to-r from-teal-500 to-green-500 text-transparent bg-clip-text">
            IamBham - Innovate Birmingham
          </span>
        </Link>
        . The class would be 9-5, 40 hours a week for 4 months. The problem was
        I was already serving at a high end resturaunt 40 hours a week. If I
        were to take on the coding bootcamp, it would mean switching my current
        work schedule to nights and coding during the day. I decided to take on
        this challenge. In the beginning, I thought this industry would
        definitely be more lucrative than being a server. So financial gain was
        my main reason for exploring this industry until I eventually (as soon
        as I learned CSS haha) found a love for designing well-made responsive
        apps.
      </p>{" "}
      <div className="flex justify-start">
        <div className="mx-6 border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide text-gray-500 px-6">
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
        <div className="mx-6 border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide text-gray-500 px-6">
        Over the past five years, I&apos;ve honed my skills and expertise in key
        areas of web development. I specialize in JavaScript (JS), TypeScript
        (TS), Node.js, and React/Next.js, leveraging these technologies to build
        dynamic and responsive web applications.
      </p>{" "}
      <div className="flex justify-start">
        <div className="mx-6 border-b w-1/12 my-4"></div>
      </div>
      <p className="tracking-wide text-gray-500 px-6">
        {" "}
        I&apos;m excited to share my experiences and insights with you, and I
        invite you to explore more about my work and connect with me to discuss
        all things tech and beyond.
      </p>
    </div>
  );
}
