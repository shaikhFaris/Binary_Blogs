import { FaReact, FaNode, FaMarkdown, FaHtml5, FaJs } from "react-icons/fa";
import {
  SiMongodb,
  SiJsonwebtokens,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const Carousel = () => {
  return (
    <div className="relative lg:mt-28 overflow-hidden">
      <div className="bg-gradient-to-r from-[hsl(var(--background))] to-transparent absolute left-0 top-0 bottom-0 z-20 h-full w-1/6"></div>
      <div className="bg-gradient-to-l from-[hsl(var(--background))] to-transparent absolute right-0 top-0 bottom-0 z-20 h-full w-1/6"></div>
      <div className="logo-div  overflow-hidden">
        <div className="logo-slide mb-16 text-[40px] md:text-[50px] lg:text-[80px] inline-block">
          <FaReact className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaNode className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaMarkdown className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiMongodb className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiJsonwebtokens className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiExpress className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiTailwindcss className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaHtml5 className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaJs className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
        </div>
        <div className="logo-slide mb-16 text-[40px] md:text-[50px] lg:text-[80px] inline-block">
          <FaReact className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaNode className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaMarkdown className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiMongodb className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiJsonwebtokens className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiExpress className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <SiTailwindcss className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaHtml5 className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
          <FaJs className="text-zinc-500 dark:text-zinc-500 inline-flex mx-3 md:mx-8 lg:mx-12" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
