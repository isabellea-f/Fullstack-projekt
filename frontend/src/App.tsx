import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
/* import Shop from "./views/Shop"; */
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./components/Shop/ProductPage";
import Checkout from "./views/Checkout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*         <Route path="shop" element={<Shop />} /> */}
        <Route path="/shop/:category" element={<ProductPage />} />
        <Route path="/shop/:category" element={<ProductPage />} />
        <Route path="/checkout" Component={Checkout} />
      </Routes>
    </Router>
  );
};

export default App;
