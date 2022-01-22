import { Link } from "react-router-dom";
import "../Styles/navbar.css"

export function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <Link to={"/arts"}>Arts</Link>
        <a href="www.google.com">Comics & Illustration</a>
        <a href="www.google.com">Design & Tech</a>
        <a href="www.google.com">Film</a>
        <a href="www.google.com">Food & Craft</a>
        <a href="www.google.com">Games</a>
        <a href="www.google.com">Music</a>
        <a href="www.google.com">Publishing</a>
      </div>
    </nav>
  );
}
