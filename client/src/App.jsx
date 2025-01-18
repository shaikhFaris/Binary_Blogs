import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import Missing from "./pages/Missing";
import Footer from "./components/Footer";
// import { useState, useEffect } from "react";
import CreateBlogPage from "./pages/CreateBlogPage";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import SelectedBlog from "./pages/SelectedBlog.jsx";
import { useState } from "react";
import OptionsBar from "./components/OptionsBar.jsx";
import PersistLogin from "./components/PersistLogin.jsx";
import Logout from "./components/Logout.jsx";

const App = () => {
  const [hideFooter, sethideFooter] = useState(false);
  const [smallDeviceSidebar, setSmallDeviceSidebar] = useState(false);
  return (
    <main className="bg-[hsl(var(--background))] w-full min-h-screen max-w-screen-2xl border border-[hsl(var(--border))]">
      <Navbar
        setSmallDeviceSidebar={setSmallDeviceSidebar}
        smallDeviceSidebar={smallDeviceSidebar}
      />
      {
        <OptionsBar
          smallDeviceSidebar={smallDeviceSidebar}
          setSmallDeviceSidebar={setSmallDeviceSidebar}
        />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/register" element={<Register />} />

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route
              path="/create"
              element={<CreateBlogPage sethideFooter={sethideFooter} />}
            />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/blogs/:id" element={<SelectedBlog />} />
          </Route>
        </Route>

        {/* Not found rout */}
        <Route path="*" element={<Missing />} />
      </Routes>
      {!hideFooter && <Footer />}
    </main>
  );
};

export default App;
