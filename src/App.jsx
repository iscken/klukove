import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Tort from "./components/Tort";
import Admin from "./components/admin";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/tort" element={<Tort />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
