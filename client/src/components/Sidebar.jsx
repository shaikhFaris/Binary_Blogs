import { useContext, useEffect, useRef, useState } from "react";
import BlogsContext from "../context/blogsProvider";
import { useNavigate } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineDocumentText, HiOutlineDocumentPlus } from "react-icons/hi2";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { RiAddFill } from "react-icons/ri";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { GiBlackHoleBolas } from "react-icons/gi";
import usePrivateAxios from "../hooks/usePrivateAxios";

// import useFetchBlogs from "../hooks/useFetchBlogs";

const Sidebar = ({
  draftBlogs,
  setdraftBlogs,
  sethideFooter,
  CollapseSidebar,
  setCollapseSidebar,
  currentBlog,
  setcurrentBlog,
  BlogsTobePosted,
  setToBeDeletedElement,
  setToggleDelete,
}) => {
  const { blogs, setBlogs, selectedBlog, setSelectedBlog } =
    useContext(BlogsContext);
  // const [publishedBlogs, setpublishedBlogs] = useState([]);
  const axiosPrivate = usePrivateAxios();
  // const getBlogs = useFetchBlogs();
  const navigate = useNavigate();
  const [navbarHeight, setnavbarHeight] = useState();
  const [OptionsToggle, setOptionsToggle] = useState([]);

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
        const tempDrafts = [BlogsTobePosted, ...response.data.drafts];
        setdraftBlogs(tempDrafts); // important
      } catch (err) {
        if (err.name === "CanceledError") {
          console.log("Request canceled:", err.message);
        } else {
          console.error("Error fetching blogs:", err);
        }
      }
    };
    getBlogs();
    return () => {
      sethideFooter(false);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const tempArr = [];
    for (let i = 0; i < draftBlogs.length; i++) {
      tempArr.push(false);
    }
    setOptionsToggle(tempArr);
  }, [draftBlogs, blogs]);

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
        className={`transition-all h-[90%] flex justify-between flex-col duration-500 ${
          CollapseSidebar ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      >
        {/*drafts and published section */}
        <div>
          <div>
            <div className="flex justify-between items-center pr-3">
              <h2 className="mt-2 mb-1 text-sm font-medium">My Drafts</h2>
              <HiOutlineDocumentAdd className="text-green-400 text-xl hover:scale-95 duration-150 " />
            </div>
            <ul className="scrollBar-div flex pr-2 flex-col gap-1 max-h-[20vh] overflow-scroll text-sm text-zinc-800 dark:text-zinc-400 pb-5 ">
              {draftBlogs?.length !== 0 ? (
                draftBlogs.map((blog, i) => {
                  return (
                    <li
                      className="w-full flex items-center justify-between p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 "
                      key={i}
                      onClick={() => {
                        setcurrentBlog(blog);
                        setSelectedBlog(blog);
                        // navigate(`/blogs/:${blog.blogId}`);
                      }}
                    >
                      <div className="inline-flex">
                        <HiOutlineDocumentText className="mr-1 inline-flex text-lg" />
                        <span>
                          {blog?.title?.length !== 0
                            ? blog?.title?.length > 25
                              ? blog.title.slice(0, 25) + "..."
                              : blog.title
                            : "No title"}
                        </span>
                      </div>
                      <div className="relative inline-flex">
                        <SlOptionsVertical
                          className="inline-flex text-lg duration-150 hover:text-[hsl(var(--foreground))] "
                          onMouseEnter={() =>
                            setOptionsToggle((prev) =>
                              prev.map((val, index) =>
                                index === i ? true : false
                              )
                            )
                          }
                          onMouseLeave={() => {
                            setTimeout(() => {}, 2000);
                            setOptionsToggle((prev) => prev.map(() => false));
                          }}
                        />
                        {OptionsToggle[i] && (
                          <div
                            className="absolute border font-medium border-[hsl(var(--border))] rounded-lg top-3 right-3 px-7 py-2 bg-[hsl(var(--background))] text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))] hover:text-[hsl(var(--destructive-foreground))] "
                            onMouseEnter={() =>
                              setOptionsToggle((prev) =>
                                prev.map((val, index) =>
                                  index === i ? true : false
                                )
                              )
                            }
                            onMouseLeave={() => {
                              setTimeout(() => {}, 2000);
                              setOptionsToggle((prev) => prev.map(() => false));
                            }}
                            onClick={() => {
                              setToBeDeletedElement({
                                title: blog.title,
                                blogId: blog.blogId,
                              });
                              setToggleDelete(true);
                            }}
                          >
                            delete
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="w-full p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 flex items-center justify-between ">
                  <div className="inline-flex">
                    <HiOutlineDocumentText className="mr-1 inline-flex text-lg" />
                    <span>Create New draft</span>
                  </div>
                  <SlOptionsVertical className="inline-flex" />
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="mt-2 mb-1 text-sm font-medium">Published</h2>
            <ul className="scrollBar-div flex pr-2 flex-col gap-1 max-h-[20vh] overflow-scroll text-sm  text-zinc-800 dark:text-zinc-400">
              {/* published blogs */}

              {blogs?.length !== 0 ? (
                blogs.map((blog, i) => {
                  return (
                    <li
                      className="w-full p-2 cursor-default hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg duration-150 "
                      key={i}
                      onClick={() => {
                        // setSelectedBlog(blog);
                        setcurrentBlog(blog);
                        // navigate(`/blogs/:${blog.blogId}`);
                      }}
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
        </div>

        {/* last section */}
        <div>
          <hr className="border border-[hsl(var(--border))] mt-4 mb-4" />
          <div className="flex flex-col justify-start gap-1">
            <button className="text-start px-1 py-2 text-sm flex items-center gap-1 font-medium rounded-lg hover:bg-zinc-300 hover:dark:bg-zinc-800">
              <HiOutlineDocumentPlus className="inline-flex text-xl" /> New
              Draft
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
              <MdOutlineKeyboardBackspace className="inline-flex text-xl" />{" "}
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
