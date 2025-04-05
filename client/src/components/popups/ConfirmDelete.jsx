import React from "react";

const ConfirmDelete = ({
  setToggleDelete,
  ToBeDeletedElement,
  setToBeDeletedElement,
}) => {
  return (
    <div className="absolute z-50 h-full w-full bg-transparent backdrop-blur-md flex justify-center items-center text-[hsl(var(--foreground))] ">
      <div className="shadow-md dark:shadow-none border border-[hsl(var(--border))] lg:h-2/3 lg:w-1/2 bg-[hsl(var(--background))] rounded-xl flex flex-col justify-center lg:gap-10 lg:p-10 relative ">
        <h1 className="text-4xl font-medium text-center leading-[3rem] text-green-500">
          {/* {toggleSubmissionPopup?.stringValue} */}
          Do you want to delete <br /> "{ToBeDeletedElement.title}" blog ?
        </h1>
        <div className="flex justify-center gap-3 items-center">
          <button
            className="border mt-2 font-medium rounded-xl border-[hsl(var(--border))] w-1/3 p-3 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--destructive))] hover:text-[hsl(var(--primary))] duration-150 "
            name={ToBeDeletedElement.draft ? "deleteDraft" : "deletePub"}
            type="submit"
          >
            Confirm Delete
          </button>
          <button
            className="border mt-2 font-medium rounded-xl border-[hsl(var(--border))] w-1/3 p-3 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary-foreground))]  hover:text-[hsl(var(--primary))] duration-150 "
            onClick={() => {
              setToBeDeletedElement({ blogId: "", title: "" });
              setToggleDelete(false);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
