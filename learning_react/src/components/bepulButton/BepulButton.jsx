// import React from 'react'
import { Link } from "react-router-dom";
import { ButtonNavbar } from "../../data/NavbarData/NavbarData";

const BepulButton = () => {
  return (
    <div>
      {ButtonNavbar?.map((button) => {
        return (
          <div id="navbarButton" key={button.id}>
            <Link to={button.url} key={button.id}>
              <button className="custom-btn btn-11 relative group">
                {button.name}
                <div className="dot absolute -top-16 bg-white w-4 h-4 animate-shiny-btn1"></div>
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BepulButton;
