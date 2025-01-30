import { useEffect, useContext, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Preview from "../components/Preview";
import { VscPreview } from "react-icons/vsc";
import ConfirmPublishPopUp from "../components/popups/ConfirmPublishPopUp";
import usePrivateAxios from "../hooks/usePrivateAxios";

const CreateBlogPage = ({ sethideFooter }) => {
  const axiosPrivate = usePrivateAxios();
  const titleRef = useRef();
  const bodyRef = useRef();
  const navigate = useNavigate();
  const [CollapseSidebar, setCollapseSidebar] = useState(false);
  const [togglePreview, settogglePreview] = useState(false);
  const [navbarHeight, setnavbarHeight] = useState();
  const [blogBody, setblogBody] = useState(``);
  const [toggleConfirmPublishPopup, settoggleConfirmPublishPopup] =
    useState(false);
  const [BlogsTobePosted, setBlogsTobePosted] = useState({
    title: "",
    content: ``,
  });
  const [Category, setCategory] = useState("");
  const [tags, settags] = useState(["#js", "#webdev", "#react"]);
  const [currentBlog, setcurrentBlog] = useState({});

  // for sidebar and preview
  useEffect(() => {
    titleRef?.current.focus();
    setnavbarHeight(document.querySelector("#navbar").clientHeight + 21);
    // console.log(document.querySelector("#navbar").clientHeight + 21);
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue =
        "You have unsaved changes. Please save the changes as draft before leaving?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleBlogChange = (e) => {
    console.log(e.target.value);
    setblogBody(`${e.target.value}`);
    const textarea = bodyRef.current;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust to scroll height
  };

  useEffect(() => {
    // console.log(currentBlog);
    if (currentBlog?.title && currentBlog?.content) {
      setblogBody(currentBlog.content);
      setBlogsTobePosted(currentBlog);
      titleRef.current.value = currentBlog.title;
      bodyRef.current.value = currentBlog.content;
      const textarea = bodyRef.current;
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [currentBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();

    // if (toggleConfirmPublishPopup) {
    // console.log(e.nativeEvent.submitter.name);
    if (e.nativeEvent.submitter.name == "publish") {
      console.log(BlogsTobePosted);
      console.log(tags);
      console.log(Category);
      console.log("submitted");
      try {
        await axiosPrivate.post(
          "/posts/submit/publishBlogs",
          {
            title: BlogsTobePosted?.title,
            content: BlogsTobePosted?.content,
            tags: tags || [],
            category: Category,
          },
          {
            headers: { "Content-Type": "application/json" },
            signal: controller.signal,
            withCredentials: true,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    // let's add a sidebar
    <form
      className="text-[hsl(var(--foreground))] min-h-screen flex gap-1 mb-5"
      onSubmit={handleSubmit}
    >
      <Sidebar
        currentBlog={currentBlog}
        setcurrentBlog={setcurrentBlog}
        sethideFooter={sethideFooter}
        CollapseSidebar={CollapseSidebar}
        setCollapseSidebar={setCollapseSidebar}
      />
      <div className="flex flex-col gap-2 w-full xl:pl-8 mt-6 ">
        {/* preview div */}
        <div
          className={`absolute right-0 p-2 pr-3 ${
            togglePreview && "border p-0 shadow-md dark:shadow-none"
          } bg-[hsl(var(--background))] overflow-x-scroll overflow-y-scroll border-[hsl(var(--border))] rounded-xl`}
          style={{
            height: `calc(98vh - ${navbarHeight}px)`,
          }}
        >
          <div
            className={`flex items-center ${
              togglePreview && "m-3 justify-between"
            }`}
          >
            <div className="flex gap-5 items-center">
              <VscPreview
                title="preview"
                className=" text-3xl hover:scale-110 duration-150 "
                onClick={() => {
                  settogglePreview(!togglePreview);
                }}
              />
              {togglePreview && (
                <span className="text-4xl font-medium">Preview</span>
              )}
            </div>
            {togglePreview && (
              <IoIosCloseCircleOutline
                className="text-3xl font-medium"
                onClick={() => {
                  settogglePreview(!togglePreview);
                }}
              />
            )}
          </div>
          <Preview
            blogBody={blogBody}
            togglePreview={togglePreview}
            settogglePreview={settogglePreview}
          />
        </div>

        <input
          ref={titleRef}
          className={`max-w-[90%] p-2 bg-transparent pr-3 outline-none xl:text-5xl font-semibold dark:text-zinc-200 placeholder-zinc-700 ${
            CollapseSidebar && togglePreview && "max-w-[55%]"
          }`}
          type="text"
          minLength={5}
          required
          maxLength={50}
          // autoCorrect=,
          placeholder="Blog title..."
          onChange={(e) =>
            setBlogsTobePosted({ ...BlogsTobePosted, title: e.target.value })
          }
        />
        <textarea
          ref={bodyRef}
          required
          minLength={10}
          className={`xl:text-lg max-w-[90%] p-3 break-all resize-y min-h-[50vh] bg-transparent focus:border-collapse outline-none placeholder-zinc-700 ${
            CollapseSidebar && togglePreview && "max-w-[55%]"
          }`}
          placeholder="Write blog body in mardkdown..."
          onChange={handleBlogChange}
        />
        <div className="flex lg:gap-5">
          <button
            className=" text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-green-600 hover:text-[hsl(var(--primary))] p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] w-2/12 font-medium duration-150"
            type="button"
            onClick={() => {
              settoggleConfirmPublishPopup(true);
              setBlogsTobePosted({
                ...BlogsTobePosted,
                content: `${blogBody}`,
              });
            }}
          >
            Publish
          </button>
          <button
            name="draft"
            className=" text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-green-600 hover:text-[hsl(var(--primary))] p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] w-2/12 font-medium duration-150"
            type="submit"
          >
            Save as draft
          </button>
        </div>
      </div>
      {/* popup */}
      {toggleConfirmPublishPopup && (
        <ConfirmPublishPopUp
          Category={Category}
          setCategory={setCategory}
          tags={tags}
          settags={settags}
          toggleConfirmPublishPopup={toggleConfirmPublishPopup}
          settoggleConfirmPublishPopup={settoggleConfirmPublishPopup}
        />
      )}
    </form>
  );
};

export default CreateBlogPage;
