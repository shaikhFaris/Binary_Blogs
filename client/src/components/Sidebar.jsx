import { useContext, useEffect, useRef, useState } from "react";
import BlogsContext from "../context/blogsProvider";
import { useNavigate } from "react-router-dom";
import { HiOutlineDocumentText, HiOutlineDocumentPlus } from "react-icons/hi2";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { GiBlackHoleBolas } from "react-icons/gi";
import usePrivateAxios from "../hooks/usePrivateAxios";

// import useFetchBlogs from "../hooks/useFetchBlogs";

const Sidebar = ({ sethideFooter, CollapseSidebar, setCollapseSidebar }) => {
  const { blogs, setBlogs } = useContext(BlogsContext);
  // const [publishedBlogs, setpublishedBlogs] = useState([]);
  const axiosPrivate = usePrivateAxios();
  // const getBlogs = useFetchBlogs();
  const navigate = useNavigate();
  const [navbarHeight, setnavbarHeight] = useState();

  useEffect(() => {
    sethideFooter(true);
    setnavbarHeight(document.querySelector("#navbar").clientHeight + 21);
    const controller = new AbortController();
    const getBlogs = async () => {
      try {
        const response = await axiosPrivate.get("/posts", {
          signal: controller.signal,
        });
        // console.log(response.data);
        setBlogs(response.data.blogs); // important
      } catch (err) {
        if (err.name === "CanceledError") {
          console.log("Request canceled:", err.message);
        } else {
          console.error("Error fetching blogs:", err);
        }
      }
    };
    getBlogs();
    // console.log(blogs);
    console.log(navbarHeight);
    return () => {
      sethideFooter(false);
      controller.abort();
    };
  }, []);

  return (
    <div
      className={`sticky left-0 py-2 overflow-scroll dark:shadow-none border-[hsl(var(--border))] rounded-xl ${
        CollapseSidebar
          ? "xl:w-10 pl-2 pr-10 flex "
          : "xl:w-[30%] lg:w-1/3 pl-3 pr-3 border-t border-r shadow-md border-b"
      } transition-all duration-500`}
      style={{
        top: navbarHeight + "px",
        height: `calc(98vh - ${navbarHeight}px)`,
      }}
    >
      <div className="flex justify-between items-center mb-2 ">
        {!CollapseSidebar && (
          <h2 className="text-[hsl(var(--blue-foreground))] jersey-font text-3xl ">
            MyCompanyBlogs
          </h2>
        )}
        <div
          className={`flex items-center gap-2 ${
            CollapseSidebar ? "flex-col-reverse text-3xl gap-6" : "text-3xl"
          }`}
        >
          {CollapseSidebar && (
            <FaCodepen className=" hover:scale-110 duration-150" />
          )}
          {CollapseSidebar && (
            <HiOutlineDocumentPlus className=" hover:scale-110 duration-150" />
          )}

          <GiBlackHoleBolas className=" hover:scale-110 duration-150" />
          <TbLayoutSidebarLeftCollapseFilled
            className=" hover:scale-110 duration-150"
            onClick={() => setCollapseSidebar(!CollapseSidebar)}
          />
        </div>
      </div>
      {!CollapseSidebar && (
        <hr className="border border-[hsl(var(--border))] mb-2" />
      )}
      <div
        className={`transition-all flex flex-col duration-500 ${
          CollapseSidebar ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      >
        <div>
          <h2 className="mt-2 mb-1 text-sm font-medium">My Drafts</h2>
          <ul className="scrollBar-div flex pr-2 flex-col gap-1 max-h-[20vh] overflow-scroll text-sm text-zinc-800 dark:text-zinc-400">
            <li className="w-full  p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 ">
              <HiOutlineDocumentText className="inline-flex text-lg" /> This is
              my first blog
            </li>
            <li className="w-full  p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 ">
              <HiOutlineDocumentText className="inline-flex text-lg" /> This is
              my first blog
            </li>
            <li className="w-full  p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 ">
              <HiOutlineDocumentText className="inline-flex text-lg" /> This is
              my first blog
            </li>
            <li className="w-full  p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 ">
              <HiOutlineDocumentText className="inline-flex text-lg" /> This is
              my first blog
            </li>
            <li className="w-full  p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 ">
              <HiOutlineDocumentText className="inline-flex text-lg" /> This is
              my first blog
            </li>
            <li className="w-full  p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 ">
              <HiOutlineDocumentText className="inline-flex text-lg" /> This is
              my first blog
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mt-2 mb-1 text-sm font-medium">Published</h2>
          <ul className="scrollBar-div flex pr-2 flex-col gap-1 max-h-[20vh] overflow-scroll text-sm  text-zinc-800 dark:text-zinc-400">
            {blogs?.length !== 0 ? (
              blogs.map((blog, i) => {
                return (
                  <li
                    key={i}
                    className="w-full p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 "
                  >
                    <HiOutlineDocumentText className="inline-flex mr-1 text-lg" />
                    {blog.title.length > 25
                      ? blog.title.slice(0, 25) + "..."
                      : blog.title}
                  </li>
                );
              })
            ) : (
              <li className="w-full  p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 ">
                <HiOutlineDocumentText className="inline-flex text-lg" /> This
                is my first blog
              </li>
            )}
          </ul>
        </div>
        <hr className="border border-[hsl(var(--border))] mt-4 mb-4" />
        <div className="flex flex-col justify-start gap-1">
          <button className="text-start px-1 py-2 text-sm flex items-center gap-1 font-medium rounded-lg hover:bg-zinc-300 hover:dark:bg-zinc-800">
            <HiOutlineDocumentPlus className="inline-flex text-xl" /> New Draft
          </button>
          <button
            className="text-start px-1 py-2 text-sm flex items-center gap-1 font-medium rounded-lg hover:bg-zinc-200 hover:dark:bg-zinc-800"
            onClick={() => navigate("/mdEditor")}
          >
            <FaCodepen className="inline-flex text-xl" />
            Md Editor
          </button>
          <button
            className="text-start px-1 py-2 text-sm flex items-center gap-1 font-medium rounded-lg hover:bg-zinc-200 hover:dark:bg-zinc-800"
            onClick={() => navigate("/")}
          >
            <MdOutlineKeyboardBackspace className="inline-flex text-xl" /> Back
            to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
