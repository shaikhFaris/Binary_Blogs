import { useState, useEffect, createContext } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch.jsx";
import api from "../api/posts.api.js";
// import { useNavigate } from "react-router-dom";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [newPost, setNewPost] = useState(null);
  const [DeletedPost, setDeletedPost] = useState(null);
  const { Data, FetchErr, IsLoading } = useAxiosFetch(
    "http://localhost:3000/posts"
  );

  useEffect(() => {
    setPosts(Data);
  }, [Data]);

  useEffect(() => {
    const deletePost = async () => {
      await api
        .delete(`/posts${DeletedPost.id}`)
        .then((data) => {
          setPosts(data.data);
          // console.log(data.data);
        })
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
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        newPost,
        setNewPost,
        DeletedPost,
        setDeletedPost,
        Data,
        FetchErr,
        IsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
