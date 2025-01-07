import Feed from "../components/Feed";
import { useContext, useEffect, useState } from "react";
import BlogsContext from "../context/blogsProvider";
import usePrivateAxios from "../hooks/usePrivateAxios";
import Hero from "../components/Hero";

const BlogsPage = () => {
  const { blogs, setBlogs } = useContext(BlogsContext);
  const [errMsg, setErrMsg] = useState("");
  const axiosPrivate = usePrivateAxios();

  useEffect(() => {
    const controller = new AbortController();
    const getBlogs = async () => {
      try {
        const response = await axiosPrivate.get("/posts", {
          signal: controller.signal,
        });
        console.log(response.data);
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
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="mt-10 pl-7 text-[hsl(var(--foreground))] min-h-screen">
      <div className="text-[hsl(var(--blue-foreground))]">
        <Hero heading="My Blogs" />
      </div>
      <div>
        {blogs.length > 0 ? (
          <div className="mt-10">
            <Feed blogs={blogs} />
          </div>
        ) : (
          <div>No blogs</div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
