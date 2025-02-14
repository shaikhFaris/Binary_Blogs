import React from "react";
import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-[hsl(var(--foreground))] min-h-screen">
      <h2 className="text-5xl text-center text-red-600">PAGE NOT FOUND</h2>
      <p
        className="underline hover:cursor-pointer hover:-translate-y-1 duration-150 text-zinc-500 hover:text-[hsl(var(--foreground))]"
        onClick={() => navigate(-1)}
      >
        go back
      </p>
    </div>
  );
};

export default Missing;
