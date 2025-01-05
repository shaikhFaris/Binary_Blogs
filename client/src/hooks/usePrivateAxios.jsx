// This hook will attach all the interceptors and also refresh access tokens when they are expired
import { PrivateAxios } from "../api/posts.api";
import useRefreshtoken from "./useRefreshtoken";
import useAuth from "./useAuth";
import { useEffect } from "react";
import axios from "axios";

const usePrivateAxios = () => {
  const refresh = useRefreshtoken();
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    const requestInterceptor = PrivateAxios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          // thhis is the first attempt of req
          console.log();

          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (err) => {
        Promise.reject(err);
      }
    );

    const responseInterceptor = PrivateAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (err) => {
        const prevReq = err?.config;
        if (err?.response?.status === 403 && !prevReq?.sent) {
          prevReq.sent = true;
          try {
            const newAccessToken = await refresh();
            prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return PrivateAxios(prevReq);
          } catch (error) {
            console.log(error);
            return Promise.reject(error);
          }
        }
        return Promise.reject(err);
      }
    );
    return () => {
      PrivateAxios.interceptors.request.eject(requestInterceptor);
      PrivateAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refresh]);

  // returning after attaching all the changes
  return PrivateAxios;
};
export default usePrivateAxios;
