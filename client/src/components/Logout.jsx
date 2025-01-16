import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  return (
    <div>
      <button
        className="bg-inherit text-white border mt-5 text-7xl"
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
