import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import Missing from "./pages/Missing";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import PostPage from "./pages/PostPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import api from "./api/posts.api.js";
import useAxiosFetch from "./hooks/useAxiosFetch.jsx";
import { DataProvider } from "./context/DataContext.jsx";

const App = () => {
  return (
    <main className="bg-[hsl(var(--background))]  min-h-screen max-w-screen-2xl">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/create" element={<CreateBlogPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </main>
  );
};

export default App;
