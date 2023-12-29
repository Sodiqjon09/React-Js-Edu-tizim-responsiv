import { RightNowText } from "../../data/RightNowData/RightNowData";
import BepulButton from "../bepulButton/BepulButton";

import "./RightNowStyle.css";

const RightNow = () => {
  return (
    <div id="rightNow">
      <div>
        {RightNowText?.map((text) => {
          return (
            <div id="rightText" key={text.id}>
              <h1>{text.h1}</h1>
              <p>{text.p}</p>
            </div>
          );
        })}
      </div>
      <div id="rightColors">
        <div id="rightblue">
            <div id="rightwhite">
                <BepulButton />
            </div>
        </div>
      </div>
    </div>
  );
};

export default RightNow;
