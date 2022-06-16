import React, { useEffect, useState } from "react";
import { deleteDoc, getDocs, collection, doc } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";

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
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button
                className="delete-button"
                onClick={() => deletePost(post.id)}
              >
                &#128465;
              </button>
            )}
          </div>
          <div className="post-content">
            <p>{post.postText}</p>
            <h3 className="post-author">Author: {post.author.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
