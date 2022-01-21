import './App.css';

 import { Home } from "./Components/Home"

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
  
  
      < Home />
    
      {/* <Navbar/> */}
      <Routes>
    
        <Route path={"/Home"} element={<Home/>}></Route>
        <Route path={"*"} element={<h1>404 Page Not Found</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;