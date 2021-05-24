import React from "react";
import PropTypes from "prop-types";
import { toogleShareBox } from "../../Utils/DOM-Manipulation";

const Messenger = (props = {}) => {
  const { darkMode, colors, size, className, setOpen, isMobile, action, link } =
    props;

  return (
    <svg
      className={className}
      width={size.width}
      height={size.height}
      onClick={() => {
        action(link);
        isMobile ? setOpen(false) : toogleShareBox(isMobile);
      }}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="messenger">
        <g id="messenger 1">
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="512"
            height="512"
          >
            <path
              id="Vector"
              d="M475.074 0H36.9258C16.5312 0 0 16.5312 0 36.9258V475.074C0 495.469 16.5312 512 36.9258 512H475.074C495.469 512 512 495.469 512 475.074V36.9258C512 16.5312 495.469 0 475.074 0ZM258 393.035C244.964 393.035 232.3 391.521 220.207 388.676C215.225 387.504 209.956 388.078 205.507 390.608L189.23 399.861C176.563 407.061 160.84 397.913 160.84 383.343V370.206C160.84 364.273 158.016 358.736 153.526 354.858C123.178 328.645 104.18 291.151 104.18 249.52C104.18 170.254 173.047 106 258 106C342.957 106 411.82 170.254 411.82 249.52C411.82 328.777 342.957 393.035 258 393.035Z"
              fill={!darkMode ? colors.dark : colors.light}
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              id="Vector_2"
              d="M512 383.386C512 453.837 454.246 512 383.796 512H128.205C57.7536 512 0 453.837 0 383.386V127.796C0 57.3441 57.7536 0 128.205 0H383.796C454.246 0 512 56.9344 512 127.796V383.386Z"
              fill={!darkMode ? colors.dark : colors.light}
            />
          </g>
        </g>
        <path
          id="Vector_3"
          d="M180.962 287.532L217.665 229.316C223.501 220.044 236.006 217.766 244.77 224.314L273.99 246.214C276.674 248.206 280.355 248.206 283.018 246.173L322.426 216.262C327.672 212.256 334.545 218.58 331.047 224.172L294.304 282.347C288.468 291.619 275.963 293.897 267.199 287.349L237.999 265.45C235.315 263.457 231.635 263.457 228.971 265.49L189.564 295.402C184.317 299.407 177.444 293.124 180.962 287.532Z"
          fill={!darkMode ? colors.dark : colors.light}
        />
      </g>
    </svg>
  );
};

Messenger.propTypes = {
  props: PropTypes.shape({
    darkMode: PropTypes.bool,
    colors: PropTypes.objectOf(PropTypes.string),
    size: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
    setOpen: PropTypes.func,
    isMobile: PropTypes.bool,
    action: PropTypes.func,
    link: PropTypes.string,
  }),
};

export default Messenger;
