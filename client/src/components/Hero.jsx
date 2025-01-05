import React from "react";

const Hero = ({ heading }) => {
  return (
    <h1 className="text-3xl font-bold text-[hsl(var(--ring))]">{heading}</h1>
  );
};

export default Hero;
