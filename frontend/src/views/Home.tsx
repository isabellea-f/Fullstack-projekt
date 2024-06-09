import React from "react";
import Navbar from "../components/MainPage/Navbar";
import QuickPage from "../components/MainPage/QuickPage";
import Footer from "../components/MainPage/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import "../Global.css";

const Home: React.FC = () => {
  const quickPages = [
    {
      title: " ",
      bgImg: "https://i.imgur.com/LkYx944.jpeg",
      serviceTitle: "Discover member exclusives",
      modal: true,
    },
    {
      title: " ",
      bgImg: "https://i.imgur.com/YP83SCB.jpeg",
      serviceTitle: "Contact us",
      header: "SERVICES",
    },
    {
      title: " ",
      bgImg: "https://i.imgur.com/rYLbvMi.jpeg",
      serviceTitle: "Gifts for him and her",
      header: "THE ART OF GIFTING",
    },
  ];

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

        <div className="video-text-2">
          <h2>SPRING SUMMER 2024</h2>
          <p>DISCOVER THE NEW COLLECTION</p>
        </div>
      </div>
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
          <h2 className="introduction-header">UNVEILING AURA</h2>
          <p className="introduction-p">
            DIVE INTO A WORLD OF SOPHISTICATION WITH AURA, CAPTURING THE ESSENCE
            OF MODERN INDIVIDUALITY AND STYLE.
          </p>
        </div>
      </div>

      <div className="image-container">
        <div className="sunglasses-model">
          <h4>NEW IN</h4>
        </div>
        <div className="bag-model">
          <h4> ANTOINE MARTIN ICONS</h4>
        </div>
      </div>

      <div className="what-we-offer">
        <h4>ANTOINE MARTIN SERVICES</h4>
        <p>
          Explore our range of exceptional offerings designed to enhance your
          experience.
        </p>
      </div>
      <div className="quickpage-container">
        {quickPages.map((page, index) => (
          <div className="qp-img" key={index}>
            <QuickPage title={page.title} bgImg={page.bgImg} />
            <div className="services">
              {page.modal && <Modal />}
              {page.header && <h4>{page.header}</h4>}
              <p>{page.serviceTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
