import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="w-1/3 border border-[hsl(var(--border))] gap-5 items-start p-5 rounded-[var(--radius)] flex flex-col">
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
          className="mt-2 block border bg-[hsl(var(--background))] border-[hsl(var(--border))] rounded-[0.5rem] py-3 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-xs focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-2 w-full "
          type="text"
          minLength={5}
          maxLength={10}
          placeholder="Enter your email"
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <label htmlFor="password" className="text-sm font-medium ">
            Password
          </label>
          <Link to="/forgotPass" className="text-sm font-mono hover:underline">
            Forgot your password?
          </Link>
        </div>
        <input
          className="mt-2 border bg-[hsl(var(--background))] border-[hsl(var(--border))] rounded-[0.5rem] py-3 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-xs focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-2 w-full "
          type="text"
          minLength={5}
          maxLength={10}
          placeholder="Enter blog title"
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
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
  );
};

export default LoginForm;
