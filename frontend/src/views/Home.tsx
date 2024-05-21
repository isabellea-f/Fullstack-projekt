import React from "react";
import Navbar from "../components/MainPage/Navbar";
import Header from "../components/MainPage/Header";
import ShopOption from "../components/MainPage/ShopOption";
import QuickPage from "../components/MainPage/QuickPage";
import Footer from "../components/MainPage/Footer";
import "./Home.css";
import "../App.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const links1 = ["Link 1.1", "Link 1.2", "Link 1.3"];
  const links2 = ["Link 2.1", "Link 2.2", "Link 2.3"];
  const links3 = ["Link 3.1", "Link 3.2", "Link 3.3"];

  return (
    <>
      <Navbar />
      {/* Video with text */}
      <Header
        type="primary"
        title={"SHOP THE COLLECTION"}
        desc={"SPRING SUMMER 2024"}
      />
      {/* Endless summer h2 with p text */}
      <div className="endless-summer">
        <h2 className="endless-summer-h2">Endless Summer</h2>
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
      {/* Women & Men category option */}
      {/* Shop Women */}
      <div className="shop-options-container">
        <div className="shop-women">
          <ShopOption index={0} bgImg={"OIG3.jpg"} />
        </div>
        {/* Shop Men */}
        <div className="shop-men">
          <ShopOption index={1} bgImg={"OIG4-male.jpg"} />
        </div>
      </div>
      {/* Second header */}
      {/* First container */}
      <div className="second-header-text-container">
        <div className="text-container">
          <p>Image</p>
        </div>
      </div>
      {/* Middle container */}
      <div className="featured">
        <h2 className="featured-h2">Featured</h2>
        <p className="featured-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eaque.
        </p>
      </div>
      {/* Third Container */}
      <div className="second-header-text-container-2">
        <div className="text-container-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            dolorum ipsum delectus dignissimos nemo ut expedita corrupti
            voluptas reprehenderit cum.
          </p>
        </div>
      </div>
      <Header type="secondary" title={"Find Your Accent"} desc={"blabla"} />

      <div className="services">
        <h4>CompanyName Services</h4>
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
