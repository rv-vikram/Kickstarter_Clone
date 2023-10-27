import { Home } from "./components/Home";
import { Nav } from "./components/project/Nav";
import { GlobalStyle } from "./globalstyles";
import { Project } from "./components/project/Project";
import { Steps } from "./components/project/Steps";

import { Route, Routes } from "react-router-dom";
import { Art } from "./components/Art";
import { Details } from "./components/Details";
import { RegisterUser } from "./components/RegisterUser";
import { LoginUser } from "./components/LoginUser";
import Todo from "./components/Index1.jsx";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Todo /> */}
      <Routes>
        {/* <Route path={"/Home"} element={}></Route> */}

        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/arts"} element={<Art />}></Route>
        <Route path={"/project"} element={<Project />}></Route>
        <Route path={"/steps"} element={<Steps />}></Route>
        <Route path={"/summary"} element={<Todo />}></Route>
        <Route path={"/arts/details"} element={<Details />}></Route>
        <Route path={"*"} element={<h1>404 Page Not Found</h1>}></Route>
        <Route path="/register" element={<RegisterUser />}></Route>
        <Route path="/login" element={<LoginUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
