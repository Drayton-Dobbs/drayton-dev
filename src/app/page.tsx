import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-60px)] bg-main pt-10 flex justify-center border-b-2 border-b-highLight ">
      <div className="flex w-3/4 justify-center">
        <div className="flex flex-col z-20">
          <h2 className="text-6xl font-bold text-white mb-6 px-10 pt-10 text-center">
            Hey there, I&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-500 to-green-500 text-transparent bg-clip-text">
              Drayton
            </span>
            .
          </h2>
          <p className="text-gray-200 w-full text-center ">
            Welcome to my space where I blend my journey as a full-stack
            developer with personal stories, adventures, and insights, aiming to
            connect, share, and inspire.
          </p>
        </div>
      </div>
    </main>
  );
}
