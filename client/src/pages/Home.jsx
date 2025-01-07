import React from "react";
import Feed from "../components/Feed";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import { HomeCards1, HomeCards2, HomeCards3 } from "../components/HomeCards";

const Home = () => {
  return (
    <div className="mt-10 pl-7 text-[hsl(var(--foreground))] min-h-screen">
      <div className="text-[hsl(var(--ring))]">
        <Hero heading="Home" />
      </div>
      <div className="flex flex-wrap justify-start mt-8">
        <HomeCards1 />
        <HomeCards2 />
        <HomeCards3 />
      </div>
    </div>
  );
};
export default Home;
