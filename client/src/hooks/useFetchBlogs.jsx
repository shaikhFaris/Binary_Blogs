import { useContext } from "react";
import BlogsContext from "../context/blogsProvider";
import usePrivateAxios from "../hooks/usePrivateAxios";

const useFetchBlogs = () => {
  const { blogs, setBlogs } = useContext(BlogsContext);
  const axiosPrivate = usePrivateAxios();

  const getBlogs = async (controller) => {
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
  return getBlogs;
};

export default useFetchBlogs;
