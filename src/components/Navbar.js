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
      <div className="navbar-container">
        <div>
          <h1>Blog</h1>
        </div>
        <div className="">
          <Link to="/">Home</Link>
          {!isAuth ? <></> : <Link to="/post">Post</Link>}
        </div>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button className="logout-button" onClick={signUserOut}>
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};
