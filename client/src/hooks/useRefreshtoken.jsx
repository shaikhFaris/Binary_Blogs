import useAuth from "./useAuth";
import axios from "../api/posts.api.js";

const useRefreshtoken = () => {
  const { setAuth } = useAuth();

  const refreshToken = async () => {
    const response = await axios
      .get("/refresh", { withCredentials: true })
      .then((response) => {
        if (!response?.data.accessToken) return;
        setAuth((prev) => {
          return {
            ...prev,
            accessToken: response.data.accessToken,
            email: response.data.email,
          };
        });
        return response;
      })
      .catch((e) => {
        if (e.status === 403) {
          setAuth({});
        }
        console.log(e);
      });
    if (!response?.data.accessToken) return;
    return response.data.accessToken;
  };
  return refreshToken;
};

export default useRefreshtoken;
