import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopWomenMen from "./views/ShopWomenMen";
import ShopWomen from "./components/Shop/ShopWomen";
// import other pages here

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
<Route path="/shopwomenmen" element={<ShopWomenMen/>} />
<Route path="/shop/:category" element={<ShopWomen />} />
<Route path="/shop/:category" element={<ShopWomen />} />

      </Routes>
    </Router>
  );
};

export default App;
