import React from "react";
import "./Post.css";

export const Post = () => {
  return (
    <div className="post-page">
      <div className="post-container">
        <h1>Create a post</h1>
        <div className="input-wrapper">
          <label>Title:</label>
          <input type="text" placeholder="Title" />
        </div>
        <div className="input-wrapper">
          <label>Post:</label>
          <textarea type="text" placeholder="Post" />
        </div>
        <button>Submit button</button>
      </div>
    </div>
  );
};
