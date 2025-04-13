"use client";

import Separator from "./Separator";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="h-[100vh]  xl:h-screen relative text-white">
      {/* overlay */}
      <div className="bg-hero absolute w-full h-full z-10 bg-primary/[0.93] "></div>
      {/* video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="containers mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative justify-center ">
        {/* text */}
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex flex-1 flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full pt-16"
        >
          <div className="flex flex-col items-center">
            <Badge containerStyles="xl:flex xl:w-[180px] xl:h-[180px] hidden" />
            <h1 className="h1 text-white">
              <span className="text-accent">Brew</span> & Savour
            </h1>
          </div>
          {/* separator */}
          <Separator />
          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Savor the comfort of great coffee in our inviting space, where each
            cup is brewed with love and a touch of magic.
          </p>
          <button className="btn">Our Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
