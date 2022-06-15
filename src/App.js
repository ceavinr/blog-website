import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesConfig } from "./config/RoutesConfig";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <RoutesConfig setIsAuth={setIsAuth} />
      </Router>
    </>
  );
}

export default App;
