import "./navstyle.css";
import { logo } from "../../data/NavbarData/NavbarData";
import { textNavbar } from "../../data/NavbarData/NavbarData";
import { Link } from "react-router-dom";
import { option } from "../../data/NavbarData/NavbarData";
import BepulButton from "../bepulButton/BepulButton";

const Navbar = () => {
  return (
    <div id="navbar">
      {logo?.map((logo) => {
        return (
          <div id="logo" key={logo.id}>
            <img src={logo.logo} alt="" />
          </div>
        );
      })}
      <div id="custom">
        {textNavbar?.map((name) => {
          return (
            <div id="actions" key={name.id}>
              <Link to={name.url} key={name.id}>
                {name.name}
              </Link>
            </div>
          );
        })}
        {option?.map((el) => {
          return (
            <div id="ElButton" key={el.id}>
              <button >{el.option}</button>
              <div id="Elp">
                <p>{el.option}</p>
                <p>{el.options}</p>
              </div>
            </div>
          );
        })}
        <BepulButton />
      </div>
    </div>
  );
};

export default Navbar;
