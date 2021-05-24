import React from "react";
import PropTypes from "prop-types";
import { toogleShareBox } from "../../Utils/DOM-Manipulation";

const Share = (props) => {
  const { darkMode, colors, size, className, setOpen, isMobile } = props;

  return (
    <svg
      className={className}
      width={size.width}
      height={size.height}
      viewBox="0 0 56 56"
      fill="none"
      onClick={() => {
        isMobile ? setOpen(true) : toogleShareBox(isMobile);
      }}
    >
      <path
        id="share light"
        d="M56 6V50C56 53.3138 53.3138 56 50 56H6C2.68625 56 0 53.3138 0 50V6C0 2.68625 2.68625 0 6 0H50C53.3138 0 56 2.68625 56 6ZM38 33C36.1797 33 34.5221 33.6951 33.2771 34.8339L24.7824 29.737C25.0725 28.5971 25.0725 27.4027 24.7824 26.2629L33.2771 21.166C34.5221 22.3049 36.1797 23 38 23C41.866 23 45 19.866 45 16C45 12.134 41.866 9 38 9C34.134 9 31 12.134 31 16C31 16.5996 31.0756 17.1816 31.2175 17.7371L22.7227 22.834C21.4779 21.6951 19.8203 21 18 21C14.134 21 11 24.134 11 28C11 31.866 14.134 35 18 35C19.8203 35 21.4779 34.3049 22.7229 33.1661L31.2176 38.263C31.0728 38.8307 30.9998 39.4143 31.0001 40.0001C31.0001 43.8661 34.1341 47.0001 38.0001 47.0001C41.8661 47.0001 45.0001 43.8661 45.0001 40.0001C45 36.134 41.866 33 38 33Z"
        fill={darkMode ? colors.dark : colors.light}
      />
    </svg>
  );
};

Share.propTypes = {
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  colors: PropTypes.objectOf(PropTypes.string),
  size: PropTypes.objectOf(PropTypes.string),
};

export default Share;
