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

const App = () => {
  const [hideFooter, sethideFooter] = useState(false);
  return (
    <main className="bg-[hsl(var(--background))] w-full min-h-screen max-w-screen-2xl border border-[hsl(var(--border))] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/register" element={<Register />} />

        {/* protected routes */}
        {/* <Route element={<RequireAuth />}> */}
        <Route
          path="/create"
          element={<CreateBlogPage sethideFooter={sethideFooter} />}
        />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<SelectedBlog />} />
        {/* </Route> */}

        {/* Not found rout */}
        <Route path="*" element={<Missing />} />
      </Routes>
      {!hideFooter && <Footer />}
    </main>
  );
};

export default App;
