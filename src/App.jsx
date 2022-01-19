// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Art } from './components/Art';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar/> */}
      <Routes>
        <Route path={"/"} element={<Navbar/>}></Route>
        <Route path={"/arts"} element={<Art/>}></Route>
        <Route path={"*"} element={<h1>404 Page Not Found</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
