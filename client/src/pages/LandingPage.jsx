import { useEffect } from "react";
import webVid from "../assets/webVid.mp4";
import ReactPlayer from "react-player/lazy";
import Navbar_2 from "../components/Navbar_2";
import image from "../assets/image-3-DL8wGSR2.webp";
import underline from "../assets/pngwing.png";
import { FaReact, FaNode, FaMarkdown, FaHtml5, FaJs } from "react-icons/fa";
import {
  SiMongodb,
  SiJsonwebtokens,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { useState } from "react";

const LandingPage = ({ sethideNavbar }) => {
  useEffect(() => {
    sethideNavbar(true);
    return () => {
      sethideNavbar(false);
    };
  }, []);
  return (
    <div className="min-h-screen overflow-hidden ">
      <Navbar_2 />
      <div className="relative h-screen w-full flex justify-center items-center ">
        <div className="absolute bottom-0 -left-2 right-0 -top-1 bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="flex flex-col items-center pt-10 gap-2 px-3 md:px-0 ">
          <h1 className="rubik-font text-[hsl(var(--foreground))] lg:text-6xl md:text-5xl w-full text-3xl xl:w-2/3 md:w-4/5 z-40 text-center">
            Write Freely, Read Endlessly, Grow{" "}
            <span className="text-[hsl(var(--blue-foreground))] ">
              Infinitely.
            </span>
          </h1>
          <p className="text-500-400 dark:text-zinc-500 text-xs text-center md:text-base  ">
            Start writing today and share your story with the world!
          </p>
          <div className="text-[hsl(var(--foreground))] flex gap-5 mt-3">
            <button className="border py-1 px-2 text-sm md:text-base md:py-2 md:px-4 rounded-md dark:font-medium text-[hsl(var(--background))] bg-[hsl(var(--foreground))] z-10 lg:hover:-translate-y-1 duration-150">
              Get Started
            </button>
            <button className="border lg:hover:text-[hsl(var(--background))] duration-150 lg:hover:bg-[hsl(var(--blue-foreground))] py-2 px-2 text-sm md:text-base md:py-2 md:px-3 rounded-md border-[hsl(var(--blue-foreground))] z-10">
              Md Editor
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="player-wrapper shadow-md dark:shadow-none ">
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
      <div className="logo-div lg:my-32 overflow-hidden">
        <div className="logo-slide lg:text-[80px] inline-block">
          <FaReact className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaNode className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaMarkdown className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiMongodb className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiJsonwebtokens className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiExpress className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiTailwindcss className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaHtml5 className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaJs className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
        </div>
        <div className="logo-slide lg:text-[80px] inline-block">
          <FaReact className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaNode className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaMarkdown className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiMongodb className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiJsonwebtokens className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiExpress className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <SiTailwindcss className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaHtml5 className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
          <FaJs className="text-zinc-500 dark:text-zinc-500 inline-flex lg:mx-12" />
        </div>
      </div>
      {/* heading2 */}
      <div className="flex justify-center lg:mb-32">
        {" "}
        <h1 className="heading2 rubik-font text-[hsl(var(--foreground))] lg:text-6xl md:text-5xl text-3xl xl:w-2/3 md:w-4/5 text-center ">
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
      <div className="border min-h-screen flex">
        <div className="w-2/3 border">
          <img src={image} alt="svg-img" className="h-full w-full" />
        </div>
        <div className="w-1/3 border text-[hsl(var(--foreground))] ">hello</div>
      </div>
    </div>
  );
};

export default LandingPage;
