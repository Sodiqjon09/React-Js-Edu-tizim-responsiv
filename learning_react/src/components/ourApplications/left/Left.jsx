import { LeftTextImg } from "../../../data/ourAppData/OurAppData";

const Left = () => {
  return (
    <div>
      {LeftTextImg?.map((ImgText) => {
        return (
          <div id="LeftTop" key={ImgText.id}>
            <div id="Right">
              <div id="RightText">
                <h1>{ImgText.h1}</h1>
                <p>{ImgText.p}</p>
              </div>
              <div id="RightImg">
                <img src={ImgText.img} alt="" />
                <div id="backgroundColor"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
