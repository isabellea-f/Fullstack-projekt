import React from "react";
import Navbar from "../components/MainPage/Navbar";
import Header from "../components/MainPage/Header"; /* 
import ShopOption from "../components/MainPage/ShopOption"; */
import QuickPage from "../components/MainPage/QuickPage";
import Footer from "../components/MainPage/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Video with text */}
      <Header type="primary" title={"SPRING SUMMER 2024"} desc={""} />
      <div id="introduction" className="introduction">
        <div className="link-to-shop-container">
          <Link to="/shop/women" className="link-to-shop">
            Shop Women
          </Link>
          <Link to="/shop/men" className="link-to-shop">
            Shop Men
          </Link>
          <p className="introduction-p">
            DON’T WAIT TO INDULGE IN THE LUXURY YOU DESERVE. BROWSE OUR
            COLLECTION AND FIND YOUR NEW FAVORITE ACCESSORY.
          </p>
        </div>
      </div>
      {/* Second header */}
      {/* First container */}
      <div className="second-header-img-container">
        <div className="img-container"></div>
      </div>
      {/* Third Container */}
      <div className="second-header-img-container-2">
        <div className="img-container-2"></div>
      </div>
      <Header type="secondary" title={""} desc={""} /> {/* Title and desc? */}
      <div className="what-we-offer">
        <h4>COMPANY ULTRA SERVICES</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus sed
          excepturi omnis aspernatur harum voluptate, nemo laudantium ducimus
          ut?
        </p>
      </div>
      <div className="quickpage-container">
        <div className="qp-img">
          <QuickPage title={" "} bgImg="https://i.imgur.com/LkYx944.jpeg" />
          <div className="services">
            <Modal />
            <p>Sign up to take part of excluse deals</p>
          </div>
        </div>
        <div className="qp-img">
          <QuickPage title={" "} bgImg="https://i.imgur.com/YP83SCB.jpeg" />
          <div className="services">
            <h4>SERVICES</h4>
            <p>Contact us</p>
          </div>
        </div>
        <div className="qp-img">
          <QuickPage title={" "} bgImg="https://i.imgur.com/rYLbvMi.jpeg" />
          <div className="services">
            <h4>THE ART OF GIFTING</h4>
            <p>Gifts for him and her</p>
          </div>
        </div>
      </div>
      {/* <div className="quickpage-text"></div> */}
      <Footer />
    </>
  );
};

export default Home;
