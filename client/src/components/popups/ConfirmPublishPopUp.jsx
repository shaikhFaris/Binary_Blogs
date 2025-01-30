import { MdAddBox } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useRef, useState } from "react";

const ConfirmPublishPopUp = ({
  toggleConfirmPublishPopup,
  settoggleConfirmPublishPopup,
  Category,
  setCategory,
  tags,
  settags,
}) => {
  const tagsRef = useRef();
  const categoryRef = useRef();

  const [tagsText, settagsText] = useState("");
  return (
    <div className="absolute z-50 h-full w-full bg-transparent backdrop-blur-md flex justify-center items-center text-[hsl(var(--foreground))] ">
      <div className="shadow-md dark:shadow-none border border-[hsl(var(--border))] lg:h-2/3 lg:w-1/2 bg-[hsl(var(--background))] rounded-xl flex flex-col justify-evenly lg:p-10 relative ">
        <h1 className="text-4xl font-medium text-center ">Confirm Publish</h1>
        <div className="absolute top-0 right-0">
          {" "}
          <IoIosCloseCircleOutline
            className="lg:m-5 text-4xl "
            onClick={() => {
              settoggleConfirmPublishPopup(false);
            }}
          />
        </div>
        <div>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              ref={tagsRef}
              type="text"
              placeholder="# tags..."
              className="p-2 bg-inherit w-full rounded-lg border border-[hsl(var(--border))] outline-none "
              onChange={(e) => settagsText(e.target.value)}
            />
            <MdAddBox
              className="text-4xl hover:scale-110 duration-150 "
              onClick={() => {
                if (tagsText.length !== 0 && tags.length < 20) {
                  !tagsText.startsWith("#")
                    ? settags([...tags, "#" + tagsText.replace(/\s+/g, "")])
                    : settags([...tags, tagsText.replace(/\s+/g, "")]);
                  tagsRef.current.value = "";
                  settagsText("");
                }
              }}
            />
          </div>
          {tags.length !== 0 && (
            <div className="mt-2 flex flex-wrap">
              {tags.map((tags, i) => {
                return (
                  <span
                    key={i}
                    className="p-1 px-2 text-sm text-[hsl(var(--blue-foreground))] font-medium rounded-md bg-[hsl(var(--accent))] m-1"
                  >
                    {tags}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <input
            required
            ref={categoryRef}
            type="text"
            placeholder="Category..."
            className="p-2 bg-inherit w-full rounded-lg border border-[hsl(var(--border))] outline-none "
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button
          className="border mt-2 font-medium rounded-xl border-[hsl(var(--border))] w-full p-3 text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-foreground))]  hover:text-[hsl(var(--primary))] duration-150 "
          name="publish"
          type="submit"
        >
          Confirm publish
        </button>
      </div>
    </div>
  );
};

export default ConfirmPublishPopUp;
