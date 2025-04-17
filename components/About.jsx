"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 2000, Deebrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Deebrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "At Deebrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollableTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollableTriggerRef.current,
          start: "top top",
          end: "1000vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary" id="about">
      <div ref={scrollableTriggerRef}>
        <div
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative]"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="xl:w-full xl:h-full flex flex-col justify-center items-center relative w-screen h-screen"
              >
                <div className="containers mx-auto xl:w-full">
                  <div className="flex gap-[30px] relative w-full justify-center pt-6 md:pt-0">
                    {/* text */}
                    <div className="flex flex-col justify-center items-center w-1/2 flex-1 xl:flex-auto">
                      <Badge containerStyles="w-[180px] h-[180px]" />
                      <div className="max-w-[560px] text-center">
                        {/* title */}
                        <h2 className="text-white mb-4 h2">
                          <span className="mr-4">
                            {item.title.split(" ")[0]}
                          </span>
                          <span className="text-accent">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>
                        {/* separator */}
                        <div className="mb-8">
                          <Separator />
                        </div>

                        {/* description */}
                        <p className="sm:leading-relaxed mb-16 px-6 xl:px-0 text-sm sm:text-base">
                          {item.description}
                        </p>
                        {/* btn */}
                        <button className="btn mb-8 sm:mb-0">See more</button>
                      </div>
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative w-1/2 ">
                      <Image
                        src={item.imgSrc}
                        alt=""
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
