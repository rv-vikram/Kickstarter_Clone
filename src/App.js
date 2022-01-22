
import { Home } from "./components/Home"
import { Nav } from './components/project/Nav';
import { GlobalStyle } from './globalstyles';
import { Project } from './components/project/Project';
import { Steps } from './components/project/Steps';

import { Route, Routes } from 'react-router-dom';
import { Art } from './components/Art';
import { Details } from "./components/Details";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>

        {/* <Route path={"/Home"} element={}></Route> */}

        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Home />}></Route>
        <Route path={"/arts"} element={<Art />}></Route>
        <Route path={"/project"} element={<Project />}></Route>
        <Route path={"/steps"} element={<Steps />}></Route>
        <Route path={"/summary"} element={<Steps />}></Route>
        <Route path={"/details"} element={<Details />}></Route>
        <Route path={"*"} element={<h1>404 Page Not Found</h1>}></Route>
      </Routes>

    </div>
  );
}

export default App;
