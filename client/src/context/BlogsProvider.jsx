import { createContext, useState } from "react";

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogsContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogsContext.Provider>
  );
};
export default BlogsContext;
