import { CustomH1 } from "../../data/CustomData/Custom";
import { customOpition } from "../../data/CustomData/Custom";
import { CustomImage } from "../../data/CustomData/Custom";

import "./Customstyle.css";

const Custom = () => {
  return (
    <div id="Custom">
      {CustomH1?.map((text) => {
        return (
          <div id="CustomMijozlarText" key={text.id}>
            <h1>{text.h1}</h1>
          </div>
        );
      })}
      <div id="item">
        {customOpition?.map((el) => {
          return (
            <div id="CustomImg" key={el.id}>
              <div id="CustomFlex">
                <div id="CustomImg2">
                  <img src={el.img} alt="" />
                </div>
                <div id="CustomText">
                  <h1>{el.h1}</h1>
                  <p>{el.p}</p>
                </div>
              </div>
              <div id="CustomImage">
                {CustomImage?.map((image) => {
                  return (
                    <div id="a" key={image.id}>
                      <img src={image.img} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Custom;
