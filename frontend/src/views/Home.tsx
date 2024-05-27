import React from "react";
import Navbar from "../components/MainPage/Navbar";
import Header from "../components/MainPage/Header"; /* 
import ShopOption from "../components/MainPage/ShopOption"; */
import QuickPage from "../components/MainPage/QuickPage";
import Footer from "../components/MainPage/Footer";
import "./Home.css";
import "../App.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Video with text */}
      <Header
        type="primary"
        title={"SPRING SUMMER 2024"}
        desc={"SHOP THE COLLECTION"}
      />
      {/* Endless summer h2 with p text */}
      {/* Change class name */}
      <div className="endless-summer">
        <h2 className="endless-summer-h2">STYLE WITH SUBSTANCE</h2>
        <p className="endless-summer-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          enim deleniti hic minus deserunt nisi necessitatibus dolor magnam,
          aliquam fuga maiores dolore accusamus nihil animi, consequuntur quidem
          sapiente! Veritatis, exercitationem magni ipsam quis, minus quo
          inventore id doloremque ipsa incidunt beatae consectetur nisi.
          Delectus error accusantium temporibus et sed voluptate.
        </p>
        <Link to="/shop/women">Shop Women</Link>
        <Link to="/shop/men">Shop Men</Link>
      </div>
      {/* Second header */}
      {/* First container */}
      <div className="second-header-text-container">
        <div className="text-container"></div>
      </div>
      {/* Third Container */}
      <div className="second-header-text-container-2">
        <div className="text-container-2"></div>
      </div>
      <Header
        type="secondary"
        title={"Nude Tones, Bold Statements"}
        desc={"Explore our newest"}
      />{" "}
      {/* Title and desc? */}
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
          <QuickPage title={" "} bgImg="/images/watch.jpg" />
        </div>
        <div className="qp-img">
          <QuickPage title={" "} bgImg="/images/letter.jpg" />
        </div>
        <div className="qp-img">
          <QuickPage title={" "} bgImg="/images/gift2.jpg" />
        </div>
        {/* Remove titles? */}
      </div>
      <div className="quickpage-text">
        <div className="sign-up">
          <Modal />
          <p>Sign up to take part of excluse deals</p>
        </div>
        <div className="services">
          <h4>SERVICES</h4>
          <p>Contact us</p>
        </div>
        <div className="art-of-giving">
          <h4>THE ART OF GIFTING</h4>
          <p>Gifts for him and her</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
