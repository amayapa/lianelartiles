import React from "react";
import polPicture from "../images/pol-pic.svg";
import "../Styles/pic.css";

const Pic = () => {
  return (
    <div className="pic">
      <img id="pic" src={polPicture} alt="pic" />
    </div>
  );
};

export default Pic;
