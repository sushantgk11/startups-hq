import React, { useState } from "react";
import Card from "./Card";
import "../Styles/List.css";
import axios from "axios";
import { Link } from "react-router-dom";

function List() {
  const [post, setPost] = useState([]);
  async function getPost() {
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/`
    );
    setPost([posts]);
  }
  getPost();
  return (
    <div className="list w-screen overflow-scroll">
      {post.map((val) => {
        return val.data.map((val2, indx) => {
          return (
            <Link to={`/Details/${val2.id}`}>
              <Card postTitle={val2.title} />
            </Link>
          );
        });
      })}
    </div>
  );
}

export default List;