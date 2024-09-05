import React from "react";
import "../../CSS/Shared/Slider.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <>
      <div className="button-div">
        <span className="button-span">
          <Link to={"/appointments"}>Book a free consultation</Link>
        </span>
      </div>
      <div className="slider">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
    </>
  );
}
export default Slider;
