import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import Navbar from "./components/SmallComponent/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
