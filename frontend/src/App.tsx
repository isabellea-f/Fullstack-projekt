import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./components/Shop/ProductPage";
import Checkout from "./views/Checkout";
import ThankYou from "./views/ThankYou";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:category" element={<ProductPage />} />
        <Route path="/shop/:category" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
