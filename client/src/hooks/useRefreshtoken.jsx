import useAuth from "./useAuth";
import axios from "../api/posts.api.js";

const useRefreshtoken = () => {
  const { setAuth } = useAuth();

  const refreshToken = async () => {
    const response = await axios
      .get("/refresh", { withCredentials: true })
      .then((response) => {
        setAuth((prev) => {
          return { ...prev, accessToken: response.data.accessToken };
        });
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
    return response.data.accessToken;
  };
  return refreshToken;
};

export default useRefreshtoken;
