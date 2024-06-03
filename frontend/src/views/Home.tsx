import React from "react";
import Navbar from "../components/MainPage/Navbar";
/* import Header from "../components/MainPage/Header"; */
import QuickPage from "../components/MainPage/QuickPage";
import Footer from "../components/MainPage/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import "../Global.css";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Video with text */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          className="video"
          src="https://videos.pexels.com/video-files/8306904/8306904-hd_1280_720_25fps.mp4"
        ></video>
        <div className="video-text">
          <h2>SPRING SUMMER 2024</h2>
          <p>DISCOVER THE NEW COLLECTION</p>
        </div>
      </div>
      <div className="video-text-2">
        <h2>SPRING SUMMER 2024</h2>
        <p>DISCOVER THE NEW COLLECTION</p>
      </div>
      {/*   <Header type="primary" title={"SPRING SUMMER 2024"} desc={""} /> */}
      <div id="introduction" className="introduction">
        <div className="link-to-shop-container">
          <div className="link-to-shop-container-women">
            <Link to="/shop/women" className="link-to-shop">
              SHOP WOMEN
            </Link>
          </div>
          <div className="link-to-shop-container-men">
            <Link to="/shop/men" className="link-to-shop">
              SHOP MEN
            </Link>
          </div>
        </div>
        <div className="introduction-container">
          <h2 className="introduction-header">
            INTRODUCING COMPANY ULTRA POUR FEMME AND POUR HOMME
          </h2>
          <p className="introduction-p">
            ENCASED IN SCULPTURAL CHAIN-LINK BOTTLES, OUR NEW FRAGRANCES EVOKE A
            SENSE OF LUXURY AND ESCAPE—CAPTURING THE MULTIFACETED ALLURE OF THE
            MODERN WOMAN AND MAN.{" "}
          </p>
        </div>
      </div>

      <div className="image-container">
        <div className="sunglasses-model">
          <h4>NEW IN</h4>
        </div>
        <div className="bag-model">
          <h4> COMPANY ULTRA ICONS</h4>
        </div>
      </div>

      {/*    <div className="three-images-container">
        <div className="second-header-img-container">
          <div className="img-container-1"></div>
        </div>


        <div className="second-header-img-container-2">
          <div className="img-container-2"></div>
        </div>
     

        <div className="third-header-img-container">
          <div className="img-container-3"></div>
        </div>
      </div> */}

      {/* <Header type="secondary" title={""} desc={""} /> */}
      <div className="what-we-offer">
        <h4>SERVICES</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus sed
          excepturi omnis aspernatur harum voluptate.
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
