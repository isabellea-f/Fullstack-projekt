import React from "react";
import Navbar from "../components/MainPage/Navbar";
import Header from "../components/MainPage/Header";
import ShopOption from "../components/MainPage/ShopOption";
import QuickPage from "../components/MainPage/QuickPage";
import Footer from "../components/MainPage/Footer";
import "./Home.css";
import "../App.css";

const Home: React.FC = () => {
  const links1 = ["Link 1.1", "Link 1.2", "Link 1.3"];
  const links2 = ["Link 2.1", "Link 2.2", "Link 2.3"];
  const links3 = ["Link 3.1", "Link 3.2", "Link 3.3"];

  return (
    <>
      <Navbar />

      <Header
        type="primary"
        title={"SHOP THE COLLECTION"}
        desc={"SPRING SUMMER 2024"}
      />
      <h2>Endless Summer</h2>
      {/* Women & Men category option */}
      <div className="shop-options-container">
        <div className="shop-women">
          <ShopOption index={0} bgImg={"OIG3.jpg"} />
        </div>
        <div className="shop-men">
          <ShopOption index={1} bgImg={"male-model2.webp"} />
        </div>
      </div>
      {/* Second header */}
      <h4 className="featured">Featured</h4>
      <Header type="secondary" title={"Find Your Accent"} desc={"blabla"} />
      <div className="quickpage-container">
        <QuickPage title={"Sign Up"} />
        <QuickPage title={"Services"} />
        <QuickPage title={"The Art of Gifting"} />
      </div>
      <div className="quickpage-text">
        <div className="sign-up">
          <h4>Sign up</h4>
          <p>Sign up to take part of excluse deals</p>
        </div>
        <div className="services">
          <h4>Services</h4>
          <p>Contact us</p>
        </div>
        <div className="art-of-giving">
          <h4>The Art Of Giving</h4>
          <p>Gifts for him and her</p>
        </div>
      </div>

      <Footer
        title1={"Services"}
        title2={"The Company"}
        title3={"Kaffekopp"}
        desc1={"mjau"}
        links1={links1}
        links2={links2}
        links3={links3}
      />
    </>
  );
};

export default Home;
