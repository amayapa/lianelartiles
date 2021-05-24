import React from "react";
import PropTypes from "prop-types";
import { toogleShareBox } from "../../Utils/DOM-Manipulation";

const Facebook = (props = {}) => {
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
      <g id="facebook">
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M407 0H105C77.1759 0.0769688 50.5135 11.1642 30.8388 30.8388C11.1642 50.5135 0.0769688 77.1759 0 105V407C0.0769688 434.824 11.1642 461.487 30.8388 481.161C50.5135 500.836 77.1759 511.923 105 512H407C434.824 511.923 461.487 500.836 481.161 481.161C500.836 461.487 511.923 434.824 512 407V105C511.923 77.1759 500.836 50.5135 481.161 30.8388C461.487 11.1642 434.824 0.0769688 407 0ZM343.083 147.125H288.625C285.758 147.168 283.021 148.329 280.998 150.36C278.974 152.392 277.824 155.133 277.792 158V190.667H343.083L332.208 256H277.792V430.208H212.5V256H168.917V190.667H212.5V158C212.533 137.813 220.561 118.461 234.828 104.178C249.095 89.8961 268.438 81.8467 288.625 81.7916H343.083V147.125Z"
          fill={!darkMode ? colors.dark : colors.light}
        />
      </g>
    </svg>
  );
};

Facebook.propTypes = {
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

export default Facebook;
