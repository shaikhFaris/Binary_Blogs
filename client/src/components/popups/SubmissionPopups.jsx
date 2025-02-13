import { useEffect } from "react";

const SubmissionPopups = ({
  toggleSubmissionPopup,
  settoggleSubmissionPopup,
}) => {
  useEffect(() => {
    console.log(toggleSubmissionPopup);
  }, [toggleSubmissionPopup]);

  return (
    <div className="absolute z-50 h-full w-full bg-transparent backdrop-blur-md flex justify-center items-center text-[hsl(var(--foreground))] ">
      <div className="shadow-md dark:shadow-none border border-[hsl(var(--border))] lg:h-2/3 lg:w-1/2 bg-[hsl(var(--background))] rounded-xl flex flex-col justify-center lg:gap-10 lg:p-10 relative ">
        <h1 className="text-4xl font-medium text-center text-green-500">
          {toggleSubmissionPopup?.stringValue}
        </h1>
        <p
          className="text-center underline font-medium cursor-pointer "
          onClick={() =>
            settoggleSubmissionPopup({ ...toggleSubmissionPopup, check: false })
          }
        >
          Go back
        </p>
      </div>
    </div>
  );
};

export default SubmissionPopups;
