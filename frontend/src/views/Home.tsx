import React from "react";
import Navbar from "../components/MainPage/Navbar";
import Header from "../components/MainPage/Header"; /* 
import ShopOption from "../components/MainPage/ShopOption"; */
import QuickPage from "../components/MainPage/QuickPage";
import Footer from "../components/MainPage/Footer";
import "./Home.css";
import "../App.css";
/* import { Link } from "react-router-dom"; */

const Home: React.FC = () => {
  const links1 = ["Help Center", "Contact Us", "Returns & Refunds"];
  const links2 = ["Our Story", "Careers", "Press"];
  const links3 = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

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
      <Header type="secondary" title={" "} desc={" "} /> {/* Title and desc? */}
      <div className="services">
        <h4>COMPANY ULTRA SERVICES</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus sed
          excepturi omnis aspernatur harum voluptate, nemo laudantium ducimus
          ut?
        </p>
      </div>
      <div className="quickpage-container">
        <QuickPage title={" "} bgImg="/images/watch.jpg" />
        <QuickPage title={" "} bgImg="/images/letter.jpg" />
        <QuickPage title={" "} bgImg="/images/gift2.jpg" />
        {/* Remove titles? */}
      </div>
      <div className="quickpage-text">
        <div className="sign-up">
          <h4>SIGN UP</h4>
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
      <Footer
        title1={"Services"}
        title2={"The Company"}
        title3={"Kaffekopp"}
        links1={links1}
        links2={links2}
        links3={links3}
      />
    </>
  );
};

export default Home;
