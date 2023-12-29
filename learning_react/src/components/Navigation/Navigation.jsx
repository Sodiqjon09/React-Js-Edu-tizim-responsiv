import "./Navigatstyle.css";
import { textPlay } from "../../data/NavigationData/NavData";
import { textImg } from "../../data/NavigationData/NavData";

const Navigation = () => {
  return (
    <div id="Navigation">
      <div id="NavigaText">
        {textPlay?.map((textImg) => {
          return (
            <div key={textImg.id}>
              <div id="texts">
                <h1>{textImg.h1}</h1>
                <p>{textImg.p}</p>
              </div>
              <div id="Play">
                <img src={textImg.Googleplay} alt="" />
                <img src={textImg.AppStore} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div id="NavigaImg">
        {textImg?.map((images) => {
          return (
            <div key={images.id}>
              <img src={images.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
