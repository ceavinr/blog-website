import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Post } from "../pages/Post";

export const RoutesConfig = ({ setIsAuth }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
};
