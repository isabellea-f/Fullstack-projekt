import React from "react";
import "./Header.css";

// Define an interface for component props
interface HeaderProps {
  type: "primary" | "secondary";
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const headerStyle = type === "primary" ? "headerPrimary" : "headerSecondary";
  return <div className={headerStyle}>Hello</div>;
};

export default Header;
