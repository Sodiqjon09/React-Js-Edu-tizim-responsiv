import Left from "./left/Left";
import { Atext } from "../../data/ourAppData/OurAppData";
import Right from './right/Right'
import './ourAppstyle.css'

const OurApplications = () => {
  return (
    <div id="OurApplications">
      {Atext?.map((el) => {
        return (
          <div id="OurAppText" key={el.id}>
            <h1>{el.textName}</h1>
          </div>
        );
      })}
      <Right />
      <Left />
      <Right />
      <Left />
    </div>
  );
};

export default OurApplications;
