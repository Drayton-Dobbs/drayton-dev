import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-main pt-10 flex justify-center border-b-2 border-b-highLight ">
      <div className="flex w-3/4 justify-center relative">
        <div className="flex flex-col z-20">
          <h2 className="text-6xl font-bold text-white mb-6 px-10 pt-10 text-center">
            Hey there, I&apos;m <span className=" text-[#5005f2]">Drayton</span>
            .
          </h2>
          <p className="text-[#5005f2] w-full text-center shadow-white">
            Welcome to my space where I blend my journey as a full-stack
            developer with personal stories, adventures, and insights, aiming to
            connect, share, and inspire.
          </p>
        </div>
        <div className="absolute">
          <Image
            src="/heroImage.jpeg"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>
    </main>
  );
}
