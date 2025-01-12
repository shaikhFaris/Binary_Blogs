import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "../api/posts.api.js";
import useAuth from "../hooks/useAuth.jsx";
import AuthContext from "../context/AuthProvider.jsx";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOGIN_URL = "/login";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LoginForm = () => {
  const { auth } = useContext(AuthContext);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.Form?.pathname || "/";

  const userRef = useRef(null);
  const errRef = useRef(null);

  const [email, setemail] = useState("");
  const [emailFocus, setemailFocus] = useState(false);
  const [validEmail, setvalidEmail] = useState(false);

  const [pass, setpasss] = useState("");
  const [passFocus, setpasssFocus] = useState(false);
  const [validPass, setvalidPass] = useState(false);

  const [ErrMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (useRef.current != null) {
      userRef?.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    // console.log(result);
    // console.log(user);
    setvalidPass(result);
    // console.log(pass === matchPass);
  }, [pass]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setvalidEmail(result);
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pass);
    if (!v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    const data = { email: email, password: pass };
    await axios
      .post(LOGIN_URL, data, {
        headers: "application/json",
        withCredentials: true,
      })
      .then((response) => {
        const accessToken = response?.data;
        setAuth({ email, accessToken });
        setemail("");
        setpasss("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        if (e.status === 401) setErrMsg("Wrong password or email");
        if (e.status === 500) setErrMsg("Server problem. Please try later.");
        if (e.status === 400) setErrMsg("Invalid entry.");
        if (e.status === 404) setErrMsg("User not found, Register first.");
        if (e && !e.status) setErrMsg("Network error");
      });
  };

  return (
    <>
      {!auth?.email ? (
        <form
          className="w-1/3 border border-[hsl(var(--border))] gap-5 items-start p-5 rounded-[var(--radius)] flex flex-col"
          onSubmit={handleSubmit}
        >
          {" "}
          <p
            ref={errRef}
            className={ErrMsg ? "font-sm font-mono text-red-500" : "offscreen"}
            aria-live="assertive"
          >
            {ErrMsg}
          </p>
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-sm text-zinc-400 mt-2">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              ref={userRef}
              className="mt-2 block border bg-[hsl(var(--background))] border-[hsl(var(--border))] rounded-[0.5rem] py-3 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-xs focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-2 w-full "
              type="email"
              required
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
              aria-invalid={validEmail ? "true" : "false"}
              aria-describedby="emailnote"
              onFocus={() => setemailFocus(true)}
              onBlur={() => setemailFocus(false)}
            />
            <p
              id="emailnote"
              className={
                email && emailFocus && !validEmail
                  ? "font-mono text-green-500 text-xs"
                  : "offscreen"
              }
            >
              Enter a valid email
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm font-medium ">
                Password
              </label>
              <Link
                to="/forgotPass"
                className="text-sm font-mono hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <input
              className="mt-2 border bg-[hsl(var(--background))] border-[hsl(var(--border))] rounded-[0.5rem] py-3 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-xs focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-2 w-full "
              type="password"
              id="password"
              autoComplete="off"
              required
              placeholder="password"
              onChange={(e) => setpasss(e.target.value)}
              aria-invalid={validPass ? "true" : "false"}
              aria-describedby="passnote"
              onFocus={() => setpasssFocus(true)}
              onBlur={() => setpasssFocus(false)}
            />
            <p
              id="passnote"
              className={
                pass && passFocus && !validPass
                  ? "text-xs text-green-500 font-mono"
                  : "offscreen"
              }
            >
              4 to 24 characters <br />
              Must include lowercase and uppercase characters, a number and a
              special character.
              <br />
              Allowed special character:{" "}
              <span aria-label="exclamation-mark">!</span>,
              <span aria-label="at symbol">@</span>,
              <span aria-label="hashtag">#</span>,
              <span aria-label="dollar-sign">$</span>
            </p>
          </div>
          <button
            className=" text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-foreground))]  hover:text-[hsl(var(--primary))] p-[5px] border border-[hsl(var(--border))] rounded-[var(--radius)] w-full font-medium duration-150"
            type="submit"
          >
            Login
          </button>
          <button
            className=" text-[hsl(var(--foreground))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary-foreground))]  hover:text-[hsl(var(--primary))] p-[5px] border border-[hsl(var(--border))] rounded-[var(--radius)] w-full font-normal duration-150"
            type="submit"
          >
            Login with Google
          </button>
          <p className="text-sm text-center w-full">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </p>
        </form>
      ) : (
        <div className="flex w-full justify-center items-center text-[hsl(var(--foreground))] min-h-screen">
          <div className="w-1/3 border border-[hsl(var(--border))] flex flex-col gap-5 justify-center items-center rounded-[var(--radius)] min-h-[40vh] ">
            <h2 className="text-5xl font-bold text-green-500 ">Logged in</h2>
            <p
              className="underline hover:cursor-pointer hover:-translate-y-1 duration-150 text-zinc-500 hover:text-[hsl(var(--foreground))]"
              onClick={() => navigate(-1)}
            >
              back
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
