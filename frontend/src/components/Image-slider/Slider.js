import React from "react";
import tech from "./data";
import image3 from "../../assets/react.jpg";

function Slider() {
  return (
    <div>
      {/* {image3} */}
      <img src={image3} alt="" />
      {tech.map((tec) => {
        const { id, img, name, title, quote } = tec;
        return (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
