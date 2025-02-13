import { useState, useEffect, useRef } from "react";
import webVid from "../assets/webVid.mp4";
import ReactPlayer from "react-player/lazy";
import Navbar_2 from "../components/Navbar_2";
import image from "../assets/image-3-DL8wGSR2.webp";
import underline from "../assets/pngwing.png";

import Carousel from "../components/Carousel";

const LandingPage = ({ sethideNavbar }) => {
  useEffect(() => {
    sethideNavbar(true);
    const target_bg = document.querySelector("#target-div");
    const cta_div = document.querySelector("#cta-div");
    if (!target_bg || !cta_div) return; // Ensure the element exists

    const radialBgFunc = (e) => {
      const { clientX, clientY } = e;
      console.log(clientX, clientY);

      // Set dynamic mask position
      target_bg.style.setProperty(
        "mask-image",
        `radial-gradient(30% 40% at ${clientX}px ${clientY}px, black, transparent)`
      );
    };

    cta_div.addEventListener("mousemove", radialBgFunc, { passive: true });

    return () => {
      sethideNavbar(false);
      cta_div.removeEventListener("mousemove", radialBgFunc);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden ">
      <Navbar_2 />
      <div className="relative h-[80vh] md:h-screen w-full flex justify-center items-center ">
        <div className="absolute bottom-0 -left-2 right-0 -top-1 bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="flex flex-col items-center pt-20 md:pt-10 gap-2 px-3 md:px-0 ">
          <h1 className="rubik-font text-[hsl(var(--foreground))] lg:text-6xl md:text-5xl w-full text-4xl xl:w-2/3 md:w-4/5 z-40 text-center">
            Write Freely, Read Endlessly, Grow{" "}
            <span className="text-[hsl(var(--blue-foreground))] ">
              Infinitely.
            </span>
          </h1>
          <p className="text-500-400 dark:text-zinc-500 max-w-xs md:max-w-none text-xs text-center md:text-base  ">
            Start writing today and share your story with the world!
          </p>
          <div className="text-[hsl(var(--foreground))] flex gap-5 mt-3">
            <button className="border py-1 px-2 text-sm md:text-base md:py-2 md:px-4 rounded-md dark:font-medium text-[hsl(var(--background))] bg-[hsl(var(--foreground))] z-10 lg:hover:-translate-y-1 duration-150">
              Get Started
            </button>
            <button className="border lg:hover:text-[hsl(var(--background))] duration-150 lg:hover:bg-[hsl(var(--blue-foreground))] py-2 px-4 text-sm md:text-base md:py-2 md:px-4 rounded-md border-[hsl(var(--blue-foreground))] z-10">
              Md Editor
            </button>
          </div>
        </div>
      </div>
      {/* react-video player */}
      <div className="hidden md:flex justify-center">
        <div className="player-wrapper border-[#4f46e5] [box-shadow:1px_1px_25px_#4f46e5] border rounded-3xl overflow-hidden md:h-[80vh] md:w-[80vw] ">
          <ReactPlayer
            className="react-player"
            // url="https://www.youtube.com/watch?v=uMQnn8xU7qs&t=16s"
            url={webVid}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
            // controls
          />
        </div>
      </div>
      {/* carousel */}
      <Carousel />

      {/* heading2 */}
      <div className="flex justify-center items-center min-h-screen">
        {" "}
        <h1 className="rubik-font text-[hsl(var(--foreground))] p-2 md:p-0 w-full text-7xl lg:text-6xl md:text-5xl xl:w-2/3 md:w-4/5 text-center ">
          Effortless blogging, powered by{" "}
          <span className="rubik-font relative ">
            Markdown.
            <img
              src={underline}
              alt="underline"
              className="w-full absolute right-0 "
            />
          </span>
        </h1>
      </div>
      {/* secgtion2 */}
      <div className="lg:min-h-screen my-12 md:my-0 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-[25rem] overflow-hidden md:w-6/12">
          <img src={image} alt="svg-img" className="my-5 md:my-0" />
        </div>
        <div className="w-full md:w-6/12 p-3 lg:pl-16 flex gap-5 md:gap-10 flex-col justify-around text-[hsl(var(--foreground))] ">
          <h2 className="text-4xl md:text-6xl text-zinc-700 dark:text-zinc-200 jersey-font ">
            Why choose us over <br className="hidden md:block" /> other
            platforms?
          </h2>
          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <div className="inline-flex border bg-[hsl(var(--border))] border-[hsl(var(--border))] rounded-full h-5 w-5"></div>
              <div className="inline-flex border border-[hsl(var(--border))] h-full" />
            </div>
            <ul className="dark:text-zinc-400 text-zinc-60 text-sm md:text-base 0 md:pl-2 pt-5">
              <li className="md:p-2 text-nowrap">
                ✔️ Effortless Markdown Writing.
              </li>
              <li className="md:p-2 text-nowrap">
                ✔️ Lightning-Fast Performance.{" "}
              </li>
              <li className="md:p-2 text-nowrap">✔️ Dark Mode Support.</li>
              <li className="md:p-2 text-nowrap">✔️ Secure & Resposnive.</li>
              <li className="md:p-2 text-nowrap">
                ✔️ Seamless addition of code snippets.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* heading3 */}
      <div className="flex justify-center items-center min-h-screen ">
        {" "}
        <h1 className="hidden md:block rubik-font text-[hsl(var(--foreground))] px-2 md:px-0 w-full text-7xl lg:text-6xl md:text-5xl xl:w-2/3 md:w-4/5 text-center ">
          To top it all off, it's completely{" "}
          <span className="rubik-font relative ">
            free of cost.
            <img
              src={underline}
              alt="underline"
              className="w-full absolute right-0 "
            />
          </span>
        </h1>
        <h1 className="md:hidden rubik-font text-[hsl(var(--foreground))] px-2 w-full text-7xl text-center ">
          And the value is greater because <br />
          <span className="rubik-font relative ">
            it's free!
            <img
              src={underline}
              alt="underline"
              className="w-full absolute right-0 "
            />
          </span>
        </h1>
      </div>
      {/* section3 call to action */}
      <div
        className="relative group h-[70vh] md:h-[90vh] mx-3 my-5 lg:my-20 lg:mx-8 rounded-xl overflow-hidden border border-[hsl(var(--border))]  flex justify-center items-center cursor-default"
        id="cta-div"
      >
        {" "}
        <div className="absolute top-0 left-0 h-full justify-evenly w-full flex flex-col">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="bubbles bg-white rounded-full"
              style={{
                "--time": `${Math.floor(Math.random() * 16) + 5}`, // Keep it as a number (no "s")
                "--delay": `-${(Math.random() * 5).toFixed(2)}s`, // Add "s" unit
                "--size": `${(Math.random() * 2 + 1).toFixed(2)}px`, // Random size (1-3rem)
              }}
            ></span>
          ))}
        </div>
        {/* 
        test */}
        <div className="absolute bottom-0 left-0 bg-[#3730a3] lg:bg-white/15 bg-blend-overlay right-0 top-0 bg-[linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)]  bg-[size:60px_60px] dark:[mask-image:radial-gradient(60%_35%_at_50%_35%,black,transparent)] md:dark:[mask-image:radial-gradient(30%_40%_at_50%_35%,black,transparent)] group-hover:opacity-0 duration-700"></div>
        {/* <div
          className={`absolute bottom-0 left-0 bg-[#3730a3] bg-blend-overlay right-0 top-0 bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]  bg-[size:60px_60px] dark:[mask-image:radial-gradient(30%_40%_at_20%_20%,black,transparent)] opacity-0 group-hover:opacity-100 duration-700 `}
        ></div> */}
        <div
          className={`hidden lg:block absolute bottom-0 left-0 bg-white/15 bg-blend-overlay right-0 top-0 bg-[linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)]  bg-[size:60px_60px] opacity-0 group-hover:opacity-100 duration-700`}
          id="target-div"
        ></div>
        {/* 
        test */}
        <div className="relative z-30 w-full">
          <h1 className="rubik-font md:max-w-md md:mx-auto text-[hsl(var(--foreground))] [text-shadow:1px_1px_10px_black] text-center font-medium text-5xl lg:text-6xl ">
            Unlock a world of insights
          </h1>
          <p className="text-white/60 text-xs md:text-lg mx-auto text-center max-w-[13rem] md:max-w-sm my-5">
            Unlock a world of insights where ideas come to life.
          </p>
          <div className="w-full flex justify-center">
            <button className="text-[hsl(var(--foreground))] p-3 px-5 border rounded-lg border-[#4f46e5] [box-shadow:1px_1px_8px_#4f46e5] bg-[hsl(var(--background))] hover:[box-shadow:1px_1px_25px_#4f46e5] duration-150 ">
              Discover now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
