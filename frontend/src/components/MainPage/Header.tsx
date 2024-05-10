import React from "react";
import "./Header.css";

// Define an interface for component props
interface HeaderProps {
  type: "primary" | "secondary";
  title: string;
}

const Header: React.FC<HeaderProps> = ({ type, title }) => {
  const headerStyle = type === "primary" ? "headerPrimary" : "headerSecondary";
  return <div className={headerStyle}>{title}</div>;
};

export default Header;
