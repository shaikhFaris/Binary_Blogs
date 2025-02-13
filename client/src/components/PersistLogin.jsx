import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRefreshtoken from "../hooks/useRefreshtoken";
import { useState } from "react";
import { useEffect } from "react";

const PersistLogin = () => {
  const [isLoading, setisLoading] = useState(true);
  const [mode, setMode] = useState("");
  const refresh = useRefreshtoken();
  const { auth } = useAuth();

  useEffect(() => {
    setMode(document.querySelector("html").className);
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };
    !auth?.email || !auth?.accessToken
      ? verifyRefreshToken()
      : setisLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
          {mode === "dark" ? (
            <span className="loader-dark"></span>
          ) : (
            <span className="loader"></span>
          )}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
