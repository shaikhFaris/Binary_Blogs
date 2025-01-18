import { AnimatePresence, motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

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

const Preview = ({ togglePreview, settogglePreview, blogBody }) => {
  return (
    <AnimatePresence>
      {togglePreview && (
        <motion.div
          className="p-3"
          initial={{ width: 0 }}
          animate={{ width: "40vw" }}
          exit={{ width: 0, opacity: 0 }}
        >
          <Markdown
            className={"overflow-hidden"}
            remarkPlugins={[remarkBreaks]} // Enable single line breaks
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
            {blogBody}
          </Markdown>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preview;
