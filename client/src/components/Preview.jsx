import { AnimatePresence, motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

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
            className={"md-div overflow-hidden"}
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
                  className="text-xs mb-4 w-full lg:text-base text-zinc-900 dark:text-zinc-400 break-all xl:mb-7"
                  {...props}
                />
              ),
              pre: ({ node, ...props }) => (
                <pre
                  className="pre-div p-3 w-full text-xs lg:text-base border border-[hsl(var(--border))] bg-[hsl(var(--blue-background))] lg:p-5 rounded-lg inline-flex lg:min-w-[50%] overflow-auto mt-2 mb-5"
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
