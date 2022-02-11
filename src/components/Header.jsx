import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";
import "../styles/header.css";

export function Header() {
  const auth = useContext(ProgressContext);
  // console.log(auth);
  return (
    <nav id="header">
      <div id="link_wrapper">
        <a href="www.random.com">Discover</a>
        <Link to={"/project"}>Start a project</Link>
      </div>
      <div id="logo_wrapper">
        <Link to={"/"}>
          <img
            src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
            alt="kickstart-logo"
          />
        </Link>
      </div>
      <div id="login_wrapper">
        <div id="search">
          <span>Search</span>
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
        {auth.isAuth() ? (
          <Link to={"/login"}>
            <img
              style={{ width: "30px", borderRadius: "15px" }}
              src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-4.0.2&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=d45a87715cd7dc1eede19d8a1fcc8e62"
              alt="nothing"
            />
          </Link>
        ) : (
          <Link to={"/login"}>Log in</Link>
        )}
      </div>
    </nav>
  );
}
