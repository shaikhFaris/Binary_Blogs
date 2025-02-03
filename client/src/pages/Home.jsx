import React from "react";
import Feed from "../components/Feed";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import { useContext } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import { HomeCards1, HomeCards2, HomeCards3 } from "../components/HomeCards";

const Home = () => {
  const { auth } = useAuth();
  return (
    <div className="mt-5 pl-3 xl:mt-10 xl:pl-7 text-[hsl(var(--foreground))] min-h-screen">
      {auth?.email ? (
        <div>
          <div className="text-[hsl(var(--ring))]">
            <Hero heading="Home" />
          </div>
          <div className="flex flex-wrap justify-start mt-3 xl:mt-8">
            <HomeCards1 />
            <HomeCards2 />
            <HomeCards3 />
          </div>
        </div>
      ) : (
        <div>Landing</div>
      )}
    </div>
  );
};

export default Home;
