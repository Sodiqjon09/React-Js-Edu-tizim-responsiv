import { ImagesdataImg } from "../../data/ImagesData/ImagesData";
import { Imagetext } from "../../data/ImagesData/ImagesData";
import "./ImagesStyle.css";

const ImagesJsx = () => {
  return (
    <div id="MarginTop">
      <div id="Imagetext">
        {Imagetext?.map((text) => {
          return (
            <div id="imagetext" key={text.id}>
              <h1>{text.h1}</h1>
              <p>{text.p}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div id="ImageJSx">
          {ImagesdataImg?.map((img) => {
            return (
              <div id="imgs" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImagesJsx;
