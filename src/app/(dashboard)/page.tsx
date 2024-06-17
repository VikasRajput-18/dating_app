import Header from "@/components/header";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="w-full relative">
        <Header />
        <video
          src="/assets/video2.mp4"
          className="absolute top-0 w-full h-screen object-cover"
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  );
};

export default Home;
