import React from "react";
import "../../Styles/slideButtons.css";

const SliderButton = ({ index, current, darkMode, handleOnSlide }) => {
  return (
    <>
      <svg
        className="hexangon"
        key={index}
        onClick={() => handleOnSlide(index)}
        width="30"
        height="30"
        viewBox="0 0 55 61"
      >
        <path
          id="hexagon"
          fill={index !== current ? "none" : darkMode ? "#b8b8b8" : "#292A2E"}
          d="M31.3017 4.05181L48.6263 14.0542C50.9468 15.3939 52.3763 17.8699 52.3763 20.5494V40.5541C52.3763 43.2336 50.9468 45.7095 48.6263 47.0493L31.3017 57.0516C28.9812 58.3914 26.1222 58.3914 23.8017 57.0516L6.47713 47.0493C4.15662 45.7095 2.72713 43.2336 2.72713 40.5541V20.5494C2.72713 17.8699 4.15662 15.3939 6.47713 14.0542L23.8017 4.05182C26.1222 2.71207 28.9812 2.71207 31.3017 4.05181Z"
          stroke={darkMode ? "#b8b8b8" : "#292A2E"}
          strokeWidth="5"
        />
      </svg>
    </>
  );
};

export default SliderButton;
