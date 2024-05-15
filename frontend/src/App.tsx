import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ShopWomen from "./views/ShopWomen";
import "bootstrap/dist/css/bootstrap.min.css";
// import other pages here

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shopwomen" element={<ShopWomen />} />
      </Routes>
    </Router>
  );
};

export default App;
