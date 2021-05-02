import React from "react";
import { images } from "../constants/images";
import "../Styles/pic.css";

const Pic = () => {
  return (
    <div className="pic">
      <img id="pic" src={images.polPicture} alt="pic" />
    </div>
  );
};

export default Pic;
