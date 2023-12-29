import { RightTextImg } from "../../../data/ourAppData/OurAppData";

const Right = () => {
  return (
    <div>
      {RightTextImg?.map((ImgText) => {
        return (
          <div id="Right" key={ImgText.id}>
            <div id="RightImg">
              <img src={ImgText.img} alt="" />
              <div id="backgroundColor"></div>
            </div>
            <div id="RightText">
              <h1>{ImgText.h1}</h1>
              <p>{ImgText.p}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Right;
