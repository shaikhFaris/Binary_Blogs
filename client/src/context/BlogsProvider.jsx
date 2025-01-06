import { createContext, useState } from "react";

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({});
  return (
    <BlogsContext.Provider
      value={{ blogs, setBlogs, selectedBlog, setSelectedBlog }}
    >
      {children}
    </BlogsContext.Provider>
  );
};
export default BlogsContext;
