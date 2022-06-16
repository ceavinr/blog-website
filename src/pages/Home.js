import React, { useEffect, useState } from "react";
import { deleteDoc, getDocs, collection, doc } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";
import "./Home.css";
import { BsTrash } from "react-icons/bs";

export const Home = ({ isAuth }) => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);

  return (
    <div className="home-page">
      {posts.map((post) => (
        <div className="post-list">
          <div className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <span className="post-author">— {post.author.name}</span>
          </div>
          <div className="post-content">
            <p>{post.postText}</p>
          </div>
          <div className="post-button">
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button
                className="delete-button"
                onClick={() => deletePost(post.id)}
              >
                <BsTrash />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
