import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="bg-inherit text-white border text-7xl"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
