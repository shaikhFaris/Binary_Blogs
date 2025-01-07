import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogsContext from "../context/blogsProvider";
import Markdown from "react-markdown";
import usePrivateAxios from "../hooks/usePrivateAxios";
import "./styles/MarkdownStyles.css";

const test = `
# Heading
## Heading
### Heading
#### Heading
##### Heading
###### Heading

**Bold Text** or __Bold \n
*Italic Text* or _Italic Text_\n
***Bold and Italic*** or ___Bold and Italic___

> This is a blockquote.
> It can span multiple lines.

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

1. Item 1
2. Item 2
   1. Subitem 2.1
   2. Subitem 2.2

[Clickable Link](https://example.com)

\`\`\`javascript
console.log("Hello, World!");
\`\`\`

This is \`inline code\`.

---
`;

const SelectedBlog = () => {
  const { selectedBlog, setSelectedBlog } = useContext(BlogsContext);
  const location = useLocation();
  const axiosPrivate = usePrivateAxios();
  useEffect(() => {
    // console.log(location.pathname.split("/blogs/")[1]);

    const controller = new AbortController();
    const getBlogs = async () => {
      try {
        const response = await axiosPrivate.get("/posts", {
          signal: controller.signal,
        });
        const displayBlog = response?.data?.blogs.find(
          (element) => location.pathname.split("/blogs/")[1] === element.blogId
        );
        setSelectedBlog(displayBlog);
      } catch (err) {
        if (err.name === "CanceledError") {
          console.log("Request canceled:", err.message);
        } else {
          console.error("Error fetching blogs:", err);
        }
      }
    };

    if (!selectedBlog) {
      getBlogs();
    }
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="pl-7 text-[hsl(var(--foreground))] min-h-screen overflow-hidden">
      <div className="mt-10 flex w-full justify-between items-center ">
        <h1
          className={`jersey-font text-[hsl(var(--blue-foreground))] text-5xl leading-12 w-2/3`}
        >
          {selectedBlog?.title}
        </h1>
        <p className="text-xs mr-4 text-zinc-600 cursor-default hover:text-zinc-400 duration-150">
          Published at: {selectedBlog?.publishedAt}
        </p>
      </div>
      <div className="mt-5">
        {/* {console.log()} */}
        {/* {selectedBlog.content?.split("\n").map((lines, index) => {
          // if (lines.startWith("```")) return <pre>{lines}</pre>;
          return <p key={index}>{lines}</p>;
        })} */}
        {/* <Markdown>{selectedBlog?.content}</Markdown> */}
        <Markdown>{test}</Markdown>
      </div>
    </div>
  );
};

export default SelectedBlog;
