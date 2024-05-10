import React from "react";
import "./Header.css";

interface HeaderProps {
  type: "primary" | "secondary";
  title: string;
  desc: string;
}

const Header: React.FC<HeaderProps> = ({ type, title, desc }) => {
  const headerStyle = type === "primary" ? "headerPrimary" : "headerSecondary";

  return (
    <div className={headerStyle}>
      <div className="header-title">
        <h2>{title}</h2>
      </div>
      <div className="header-desc">
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default Header;
