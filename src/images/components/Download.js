import React from "react";
import PropTypes from "prop-types";

const Download = (props) => {
  const { darkMode, colors, size } = props;
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 651 974"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M623.216 377.998C634.356 364.273 624.588 343.765 606.91 343.765H486C474.402 343.765 465 334.363 465 322.765V21C465 9.40203 455.598 0 444 0H207C195.402 0 186 9.40202 186 21V322.765C186 334.363 176.598 343.765 165 343.765H44.0896C26.4122 343.765 16.6442 364.273 27.7841 377.998L309.194 724.733C317.599 735.088 333.401 735.088 341.806 724.733L623.216 377.998ZM21 859.412C9.40204 859.412 0 868.814 0 880.412V953C0 964.598 9.40202 974 21 974H630C641.598 974 651 964.598 651 953V880.412C651 868.814 641.598 859.412 630 859.412H21Z"
        fill={darkMode ? colors.dark : colors.light}
      />
    </svg>
  );
};

Download.propTypes = {
  darkMode: PropTypes.bool,
  colors: PropTypes.object,
  size: PropTypes.object,
};

export default Download;
