import React from "react";
import "./Header.css";

interface HeaderProps {
  type: "primary" | "secondary";
  title: string;
  desc: string;
}

const Header: React.FC<HeaderProps> = ({ type, title, desc }) => {
  const headerStyle = type === "primary" ? "headerPrimary" : "headerSecondary";

  const mediaSource =
    type === "primary"
      ? "/videos/model5(1).mp4"
      : "https://i.imgur.com/5limkqH.jpeg";

  return (
    <div className="header-content">
      {type === "primary" ? (
        <div className="video-container gradient">
          <div className="video-container">
            <video autoPlay loop muted className="Video">
              <source src={mediaSource} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        <img src={mediaSource} alt="Header background" className="Image" />
      )}
      <div className={headerStyle}>
        <div className="header-title">
          <h2>{title}</h2>
        </div>
        <div className="header-desc"></div>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default Header;
