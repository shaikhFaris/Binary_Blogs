import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/posts.api.js";

const REGISTER_URL = "/register";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [user, setuser] = useState("");
  const [userFocus, setuserFocus] = useState(false);
  const [validName, setvalidName] = useState(false);

  const [email, setemail] = useState("");
  const [emailFocus, setemailFocus] = useState(false);
  const [validEmail, setvalidEmail] = useState(false);

  const [pass, setpasss] = useState("");
  const [passFocus, setpasssFocus] = useState(false);
  const [validPass, setvalidPass] = useState(false);

  const [matchPass, setmathPass] = useState("");
  const [matchPassFocus, setmatchPassFocus] = useState(false);
  const [validmatchPass, setvalidmatchPass] = useState(false);

  const [ErrMsg, setErrMsg] = useState("");
  const [success, setsuccess] = useState(false);

  useEffect(() => {
    if (useRef.current != null) {
      userRef?.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    // console.log(result);
    // console.log(user);
    setvalidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    // console.log(result);
    // console.log(user);
    setvalidPass(result);
    setvalidmatchPass(pass === matchPass);
    // console.log(pass === matchPass);
  }, [pass, matchPass]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    setvalidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pass, matchPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pass);
    if (!v1 || !v2 || !v3) {
      setErrMsg(
        "Trying to mess with us... We have your IP<br/>THE POLICE COULD AT YOUR PLACE ANYTIME NOW!"
      );
      return;
    }
    const data = { username: user, password: pass, email: email };
    await axios
      .post(REGISTER_URL, data)
      .then((response) => {
        console.log(response);
        setsuccess(true);
      })
      .catch((e) => {
        setErrMsg(e.message);
      });
  };

  return (
    <>
      {!success ? (
        <form
          className="w-11/12 lg:w-1/3 md:w-1/2 border border-[hsl(var(--border))] gap-5 items-start p-5 rounded-[var(--radius)] flex flex-col"
          onSubmit={handleSubmit}
        >
          <p
            ref={errRef}
            className={ErrMsg ? "font-sm font-mono text-red-500" : "offscreen"}
            aria-live="assertive"
          >
            {ErrMsg}
          </p>
          <div>
            <h1 className="text-2xl font-semibold">Register</h1>
          </div>
          <div className="w-full">
            <label htmlFor="username" className="text-sm font-medium">
              Username:
            </label>
            <input
              className="mt-2 block border bg-[hsl(var(--background))] border-[hsl(var(--border))] rounded-[0.5rem] py-3 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-xs focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-2 w-full "
              id="username"
              autoComplete="off"
              autoCapitalize="off"
              type="text"
              placeholder="Enter your username"
              ref={userRef}
              required
              onChange={(e) => setuser(e.target.value)}
              aria-invalid={validName ? "true" : "false"}
              aria-describedby="uidnote"
              onFocus={() => setuserFocus(true)}
              onBlur={() => setuserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? "text-xs text-green-600 font-mono"
                  : "offscreen"
              }
            >
              4 to 24 characters <br />
              Must begin with a letter <br />
              Letters, numbers, hyphens and underscores are allowed.
            </p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-sm font-medium">
              Email:
            </label>
            <input
              className="mt-2 block border bg-[hsl(var(--background))] border-[hsl(var(--border))] rounded-[0.5rem] py-3 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-xs focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-2 w-full "
              type="text"
              id="email"
              autoComplete="off"
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
              Enter a valid email address
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm font-medium ">
                Password:
              </label>
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

          {/* MATCHING PASSWORD */}
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="confirm_pass" className="text-sm font-medium ">
                Confirm Password:
              </label>
            </div>
            <input
              className="mt-2 border bg-[hsl(var(--background))] border-[hsl(var(--border))] rounded-[0.5rem] py-3 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-xs focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-2 w-full "
              type="password"
              id="confirm_pass"
              autoComplete="off"
              required
              placeholder="confirm password"
              onChange={(e) => setmathPass(e.target.value)}
              aria-invalid={validmatchPass ? "true" : "false"}
              aria-describedby="matchpassnote"
              onFocus={() => setmatchPassFocus(true)}
              onBlur={() => setmatchPassFocus(false)}
            />
            <p
              id="matchpassnote"
              className={
                matchPassFocus && !validmatchPass
                  ? "text-xs text-green-500 font-mono"
                  : "offscreen"
              }
            >
              Passswords don't match
            </p>
          </div>
          <button
            className={
              validName && validPass && validmatchPass && validEmail
                ? "text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-foreground))]  hover:text-[hsl(var(--primary))] p-[5px] border border-[hsl(var(--border))] rounded-[var(--radius)] w-full font-medium duration-150"
                : "text-[hsl(var(--primary-foreground))] bg-[hsl(var(--border))] p-[5px] border border-[hsl(var(--border))] rounded-[var(--radius)] w-full font-medium duration-150 "
            }
            type="submit"
            disabled={!(validName && validEmail && validPass && validmatchPass)}
          >
            Register
          </button>
        </form>
      ) : (
        <div className="w-11/12 lg:w-1/3 md:w-1/2 border border-[hsl(var(--border))] gap-5 items-start p-5 rounded-[var(--radius)] flex flex-col">
          <h1 className="text-3xl font-semibold text-green-500">Success</h1>
          <p className="text-sm w-full">
            Account created successfully.{" "}
            <Link to="/login" className="underline">
              login now
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
