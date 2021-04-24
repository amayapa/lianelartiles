import React from "react";
import { polPicture } from "../constants/images";
import "../Styles/pic.css";

const Pic = () => {
  return (
    <div className="pic">
      <img id="pic" src={polPicture} alt="pic" />
    </div>
  );
};

export default Pic;
