import React, { useState, useEffect, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import classes from "./Posts.module.css";
import stateContext from "../../Contexts/stateContext";
const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(stateContext);
  useEffect(() => {
    getName();
  }, []);
  useEffect(() => {
    getPostsData();
  }, [props.match.params.id]);

  const getPostsData = async () => {
    setLoading(true);
    const myData = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${props.match.params.id}`
    )
      .then((res) => res.json())
      .then((newData) => newData);
    setPosts(() => {
      setLoading(false);
      return myData;
    });
  };
  const getName = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("name", data.name);
        dispatch({
          type: "showPosts",
          payload: { name: data.name },
        });
        return data.name;
      });
  };
  return (
    <div className={classes.container}>
      <Spinner loading={loading} />
      {posts.map((post) => (
        <div key={post.id} className={classes.postContainer}>
          <>
            <h2 className={classes.h2}>{post.title}</h2>
            <p className={classes.p}>{post.body}</p>
          </>
        </div>
      ))}
    </div>
  );
};

export default Posts;
