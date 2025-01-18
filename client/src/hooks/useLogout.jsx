import usePrivateAxios from "../hooks/usePrivateAxios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { auth, setAuth } = useAuth();
  const privateAxios = usePrivateAxios();
  const logout = async () => {
    setAuth({});
    try {
      await privateAxios.get("/logout", { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};

export default useLogout;
