import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import Missing from "./pages/Missing";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import PostPage from "./pages/PostPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import { DataProvider } from "./context/DataContext.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import RequireAuth from "./components/RequireAuth.jsx";

const App = () => {
  return (
    <main className="bg-[hsl(var(--background))] w-full min-h-screen max-w-screen-2xl overflow-hidden border border-[hsl(var(--border))] ">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/register" element={<Register />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/create" element={<CreateBlogPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
          </Route>

          {/* Not found rout */}
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </main>
  );
};

export default App;
