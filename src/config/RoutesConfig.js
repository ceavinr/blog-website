import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Post } from "../pages/Post";

export const RoutesConfig = ({ isAuth, setIsAuth }) => {
  const ProtectedRoute = () => {
    return isAuth ? <Outlet /> : <Login />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
};
