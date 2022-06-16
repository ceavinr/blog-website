import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/post">Post</Link>
          <button onClick={signUserOut}>Log out</button>
        </>
      )}
    </nav>
  );
};
