import "./App.css";
import { RegisterUser } from "./components/RegisterUser";
import { Routes, Route } from "react-router-dom";
import { LoginUser } from "./components/LoginUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterUser />}></Route>
        <Route path="/login" element={<LoginUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
