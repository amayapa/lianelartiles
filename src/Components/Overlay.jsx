import React from 'react';
import PropTypes from 'prop-types'

const Overlay = (props = {}) => {
  const { open, setOpen } = props;

  return (
    <div
      className={open ? "overlay" : "overlay.active"}
      onClick={() => setOpen(!open)}
    >
    </div>
  )
}

Overlay.propTypes = {
  props: PropTypes.shape({
    open: PropTypes.bool,
    setOpen: PropTypes.func,
  })
};

export default Overlay;