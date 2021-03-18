import React from "react";
import "../../App.css";

const Header = ({ logo, title, user }) => {
  return (
    <div className="Header">
      <div className="Logo">
        <h1>{logo}</h1>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="User">
        <h1>{user}</h1>
      </div>
    </div>
  );
};

export default Header;
