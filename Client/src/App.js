import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Products from "./Pages/Products";
import Brands from "./Pages/Brands"
import DashBoard from "./Pages/DashBoard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/Brands" element={<Brands />}></Route>
      <Route path="/DashBoard" element={<DashBoard />}></Route>
    </Routes>
  );
}

export default App;
