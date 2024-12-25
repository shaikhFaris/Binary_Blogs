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

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [newPost, setNewPost] = useState(null);
  const [DeletedPost, setDeletedPost] = useState(null);

  useEffect(() => {
    const fetchFunc = async () => {
      await api
        .get("/posts")
        .then((data) => {
          console.log("get\n" + data);
          if (data.status == 200) {
            setPosts(data.data);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchFunc();
  }, []);
  useEffect(() => {
    const deletePost = async () => {
      await api
        .delete(`/posts:${DeletedPost.id}`)
        .then((data) => setPosts(data.data))
        .catch((e) => {
          console.log("could not delete");
          console.log(e);
        });
    };

    if (DeletedPost != null) {
      console.log(DeletedPost);
      deletePost();
    }
  }, [DeletedPost]);

  useEffect(() => {
    const updateFunc = async (obj) => {
      await api
        .post("/posts", { data: obj })
        .then((data) => {
          console.log(data.status);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    if (newPost != null) {
      console.log(newPost);
      updateFunc({
        ...newPost,
        id: posts.length != 0 ? posts[[posts.length - 1]].id + 1 : 1,
      });
      let tempPosts = posts;
      tempPosts.push({
        ...newPost,
        id: posts.length != 0 ? posts[[posts.length - 1]].id + 1 : 1,
      });
      setPosts(tempPosts);
      setNewPost(null);
    }
    return () => {
      setNewPost(null);
    };
  }, [newPost]);

  return (
    <main className="bg-[hsl(var(--background))]  min-h-screen max-w-screen-2xl">
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/updates" element={<Updates />} />
        <Route
          path="/create"
          element={<CreateBlogPage seetNewPost={setNewPost} />}
        />
        <Route
          path="/posts/:id"
          element={
            <PostPage
              posts={posts}
              setPosts={setPosts}
              setDeletedPost={setDeletedPost}
            />
          }
        />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
