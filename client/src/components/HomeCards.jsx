import { MdCreateNewFolder } from "react-icons/md";
import { RiDashboardFill, RiDashboard3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HomeCards1 = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`m-2 ml-0 w-full xl:w-1/3 xl:min-h-[23vh] shadow-lg border rounded-xl p-2 dark:border-green-900 hover:border-green-400 dark:hover:border-green-400 duration-150`}
      onClick={() => navigate("/create")}
    >
      <div className={`flex w-full items-center justify-start gap-3 mb-1`}>
        <MdCreateNewFolder className=" text-3xl xl:text-5xl text-green-500" />
        <h2
          className={`font-sans font-semibold text-xl  xl:text-2xl text-green-500 hover:cursor-pointer `}
        >
          Create a new blog
        </h2>
      </div>
      <p className="text-xs xl:text-sm font-light p-1 text-zinc-500">
        hare your thoughts, ideas, and knowledge with the world! Click below to
        create a new post and let your voice be heard.{" "}
      </p>
    </div>
  );
};
const HomeCards2 = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`m-2 ml-0 w-full xl:w-1/3 xl:min-h-[23vh] shadow-lg border rounded-xl p-2 dark:border-violet-950 hover:border-violet-400 dark:hover:border-violet-400 duration-150`}
      onClick={() => navigate("/dashboard")}
    >
      <div className={`flex w-full items-center justify-start gap-3 mb-1`}>
        <RiDashboard3Line className="text-3xl text-violet-500" />
        <h2
          className={`font-sans font-semibold text-xl xl:text-2xl text-violet-500 hover:cursor-pointer `}
        >
          Dashboard
        </h2>
      </div>
      <p className="text-xs xl:text-sm font-light p-1 text-zinc-500">
        Manage your posts, track engagement, and stay organized all in one
        place. Your dashboard is your command center.
      </p>
    </div>
  );
};
const HomeCards3 = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`m-2 ml-0 w-full xl:w-1/3 xl:min-h-[23vh] shadow-lg border rounded-xl p-2 dark:border-blue-950 hover:border-blue-400 dark:hover:border-blue-400 duration-150`}
      onClick={() => navigate("/blogs")}
    >
      <div className={`flex w-full items-center justify-start gap-3 mb-1`}>
        <RiDashboardFill className="text-3xl xl:text-5xl text-[hsl(var(--blue-foreground))]" />
        <h2
          className={`font-sans font-semibold text-2xl text-[hsl(var(--blue-foreground))] hover:cursor-pointer `}
          onClick={() => navigate("/blogs")}
        >
          My Blogs
        </h2>
      </div>
      <p className="text-xs xl:text-sm font-light p-1 text-zinc-500">
        Explore all your published posts in one place. Edit, delete, or share
        your content effortlessly. Your stories, ready to shine.
      </p>
    </div>
  );
};

export { HomeCards1, HomeCards2, HomeCards3 };
