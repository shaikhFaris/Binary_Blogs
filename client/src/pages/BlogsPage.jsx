import Feed from "../components/Feed";
import { useContext, useEffect, useState } from "react";
import BlogsContext from "../context/blogsProvider";
import usePrivateAxios from "../hooks/usePrivateAxios";

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

        setBlogs(response.data);
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
      Hello
      {blogs.length > 0 ? (
        <div>
          <Feed blogs={blogs} />
        </div>
      ) : (
        <div>No blogs</div>
      )}
    </div>
  );
};

export default BlogsPage;
