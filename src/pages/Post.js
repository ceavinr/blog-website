import React, { useState } from "react";
import "./Post.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Post = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="post-page">
      <div className="post-container">
        <h1>Create a post</h1>
        <div className="input-wrapper">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label>Post:</label>
          <textarea
            type="text"
            placeholder="Post"
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <button onClick={createPost}>Submit post</button>
      </div>
    </div>
  );
};
