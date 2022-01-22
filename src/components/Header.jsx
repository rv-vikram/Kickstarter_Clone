import { Link } from "react-router-dom";
import "../Styles/header.css"

export function Header() {


  return (
    <nav id="header">
      <div id="link_wrapper">
        <a href="www.random.com">Discover</a>
        <Link to={"/project"}>Start a project</Link>
      </div>
      <div id="logo_wrapper">
        <Link to={"/"}><img
          src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
          alt="kickstart-logo"
        /></Link>
      </div>
      <div id="login_wrapper">
        <div id="search">
          <span>Search</span>
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <a href="www.random.com">Log in</a>
      </div>
    </nav>
  );
}
