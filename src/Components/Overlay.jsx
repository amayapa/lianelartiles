import React from 'react';
import PropTypes from 'prop-types'

const Overlay = (props = {}) => {
  const { open, stateChangers, styles = {} } = props;

  return (
    <div
      style={styles}
      className={open ? "overlay" : "overlay.active"}
      onClick={() => {
        stateChangers.map((setter) => {
          return setter(!setter)
        })
      }}
    >
    </div>
  )
}

Overlay.propTypes = {
  props: PropTypes.shape({
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    styles: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])),
  })
};

export default Overlay;