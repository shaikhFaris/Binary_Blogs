import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRefreshtoken from "../hooks/useRefreshtoken";
import { useState } from "react";
import { useEffect } from "react";

const PersistLogin = () => {
  const [isLoading, setisLoading] = useState(true);
  const refresh = useRefreshtoken();
  const { auth } = useAuth();

  useEffect(() => {
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
  // useEffect(() => {
  //   console.log(isLoading);
  //   console.log(auth);
  // }, [isLoading]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
