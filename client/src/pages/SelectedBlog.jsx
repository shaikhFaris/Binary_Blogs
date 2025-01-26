import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogsContext from "../context/blogsProvider";
import Markdown from "react-markdown";
import usePrivateAxios from "../hooks/usePrivateAxios";

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

> “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”

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
console.log("Hello, World!"); console.log(" break-words break-wordsHello, World!"); cconsole.log("Hello, World!");onsole.log("Hello, World!");
console.log("Hello, World!");

console.log("Hello, World!");
\`\`\`

This is a paraThis is a paraThisppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppparaThispppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a paraThis is a para

This is \`inline code\`.

---
`;

const SelectedBlog = () => {
  const { selectedBlog, setSelectedBlog } = useContext(BlogsContext);
  const location = useLocation();
  const axiosPrivate = usePrivateAxios();
  useEffect(() => {
    // console.log(location.pathname.split("/blogs/")[1]);
    console.log(selectedBlog);

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
    <div className="px-3 xl:pr-0 xl:pl-7 text-[hsl(var(--foreground))] min-h-screen overflow-hidden">
      <div className="mt-5 xl:mt-10 xl:flex w-full justify-between items-center ">
        <h1
          className={`text-2xl jersey-font text-[hsl(var(--blue-foreground))] xl:text-5xl leading-12 xl:w-2/3`}
        >
          {selectedBlog?.title}
        </h1>
        <p className="text-xs xl:mr-4 text-zinc-600 cursor-default lg:hover:text-zinc-400 duration-150">
          Published at: {selectedBlog?.publishedAt}
        </p>
      </div>
      <div className="mt-3 xl:mt-5">
        <Markdown
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-2xl mb-1 mt-3 xl:text-5xl xl:mt-5 xl:mb-3"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-xl mb-1 mt-3 xl:text-4xl xl:mt-5 xl:mb-2"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-lg mb-1 mt-3 xl:text-3xl xl:mt-5 xl:mb-2"
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              <h4
                className=" xl:text-2xl mb-1 mt-3 xl:mt-5 xl:mb-2 "
                {...props}
              />
            ),
            h5: ({ node, ...props }) => (
              <h5
                className="xl:text-xl mb-1 mt-3 xl:mt-5 xl:mb-2 "
                {...props}
              />
            ),
            h6: ({ node, ...props }) => (
              <h6
                className="xl:text-lg mb-1 mt-3  xl:mt-5 xl:mb-2"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => (
              <strong
                className="font-bold text-[hsl(var(--foreground))] "
                {...props}
              />
            ),

            em: ({ node, ...props }) => (
              <em
                className="font-light italic text-[hsl(var(--foreground))] "
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="text-[hsl(var(--accent-foreground))] italic bg-[hsl(var(--accent))] inline-flex max-w-[65%] p-4 border-l-4 border[hsl(var(--foreground))] "
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <ol
                className="pl-4 list-decimal text-zinc-900 dark:text-zinc-300 "
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="pl-4 list-disc text-zinc-900 dark:text-zinc-300 "
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="text-xs mb-4 w-full lg:text-base text-zinc-900 dark:text-zinc-400 break-all xl:mb-7 xl:max-w-[87%] "
                {...props}
              />
            ),
            pre: ({ node, ...props }) => (
              <pre
                className="p-3 w-full text-xs lg:text-base border border-[hsl(var(--border))] bg-[hsl(var(--blue-background))] lg:p-5 rounded-lg inline-flex lg:min-w-[50%] lg:max-w-[85%] overflow-auto mt-2 mb-5"
                {...props}
              />
            ),
            code: ({ node, ...props }) => (
              <code
                className="px-2 rounded-md inline-flex font-medium text-[hsl(var(--foreground))] bg-zinc-300 dark:bg-zinc-800 "
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="underline text-[hsl(var(--blue-foreground))] hover:no-underline"
                {...props}
              />
            ),
            hr: ({ node, ...props }) => (
              <hr
                className="my-4 border-[hsl(var(--foreground))] xl:my-10 xl:w-2/3 mx-auto"
                {...props}
              />
            ),
          }}
        >
          {/* {test} */}
          {selectedBlog?.content}
        </Markdown>
      </div>
    </div>
  );
};

export default SelectedBlog;
