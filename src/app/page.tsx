import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-main pt-10 border-b-2 border-b-highLight">
      <div className="flex ">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-white mb-6">
            Hey there, I'm <span className=" text-[#5005f2]">Drayton</span>.
          </h2>
          <p className="text-gray-400">
            Welcome to my space where I blend my journey as a full-stack
            developer with personal stories, adventures, and insights, aiming to
            connect, share, and inspire.
          </p>
        </div>
        {/* <div className="min-w-[350px] w-[350px]  relative">
          <Image
            src="/profilePic.png"
            layout="fill"
            objectFit="contain"
            alt="Picture of the author"
          />
        </div> */}
      </div>
    </main>
  );
}
