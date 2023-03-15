import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export const url = "https://stormy-puce-tank-top.cyclic.app/lenses";
export default App;
