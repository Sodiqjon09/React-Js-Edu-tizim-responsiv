import { ChanceDataTextpart1 } from "../../data/ChanceData/ChanceData";
import { componentsBox } from "../../data/ChanceData/ChanceData";
import "./ChanceStyle.css";
const Chance = () => {
  return (
    <div id="Chance">
      <div id="A">
        {ChanceDataTextpart1?.map((text) => {
          return (
            <div id="LittleText" key={text.id}>
              <div id="textChanceText">
                <div>
                  <h1>{text.h1}</h1>
                  <p>{text.p}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="ChanceBackgroundColor">
        <div id="boxKing">
          {componentsBox?.map((data) => {
            return (
              <div id="box" key={data.id}>
                <div id="flexPart2">
                  <div id="boxKingimg">
                    <img src={data.Img} alt="" />
                  </div>
                </div>
                <h1>{data.h1}</h1>
                <p>{data.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chance;
