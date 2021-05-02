import React from "react";
import PropTypes from "prop-types";

const UniversalComponent = (props = {}) => {
  const { styles, elements, components } = props;

  return <div className={styles.root}></div>;
};

UniversalComponent.propTypes = {
  styles: PropTypes.object,
  elements: PropTypes.array,
};

export default UniversalComponent;
