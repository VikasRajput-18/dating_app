import Header from "@/components/header";
import React from "react";

const Home = () => {
  const random = Math.floor(Math.random() * 2) + 1;
  return (
    <section>
      <div className="w-full h-screen relative overflow-hidden">
        <Header />
        <video
          src={`/assets/video${random}.mp4`}
          className="absolute top-0 w-full h-screen object-cover"
          autoPlay
          muted
          loop
        />
        <div
          className="relative h-[100vh] flex items-center justify-center flex-col backdrop-blur-sm
            bg-black/40 -top-[64px]"
        >
          <h1 className="text-center text-white text-3xl md:text-5xl font-extrabold px-2">
            Discover Your
            <i
              className="bg-gradient-to-tr from-rose-500 via-purple-500 to-orange-500 bg-clip-text
                text-transparent drop-shadow-md"
            >
              {" "}
              Perfect{" "}
            </i>{" "}
            Match
          </h1>
          <p className="text-slate-300 text-sm text-center font-semibold">
            Join our community and start building meaningful connections today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
