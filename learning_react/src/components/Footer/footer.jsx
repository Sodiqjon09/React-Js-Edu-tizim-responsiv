import { footerLogo } from "../../data/Footer/footure";
import { footureTextImg } from "../../data/Footer/footure";
import { footuretext2 } from "../../data/Footer/footure";

import "./footerStyle.css";

const Logo = () => {
  return (
    <div id="flexN1">
      {footureTextImg?.map((logo) => {
        return (
          <div key={logo.id}>
            <img src={logo.appLogo} alt="" />
          </div>
        );
      })}
    </div>
  );
};

const footer = () => {
  return (
    <footer>
      <div></div>
      <div>
        {footerLogo?.map((logo) => {
          return (
            <div id="footerLogo" key={logo.id}>
              <img src={logo.footerLogo} alt="" />
            </div>
          );
        })}
      </div>
      <div>
        {footureTextImg?.map((logotext) => {
          return (
            <div id="footerLogoText" key={logotext.id}>
              <div id="footerText">
                <img src={logotext.urlLogo} alt="" />
                <p>{logotext.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {footuretext2?.map((el) => {
          return (
            <div id="footerText" key={el.id}>
              <img src={el.urlLogo} alt="" />
              <p>
                {el.text}<br />{el.text1}
              </p>
            </div>
          );
        })}
      </div>

      <div id="flexContainer">
        <p>Ijtimoiy tarmoqlarimiz:</p>
        {Logo()}
      </div>
    </footer>
  );
};

export default footer;
