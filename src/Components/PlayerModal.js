import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

const useStyles = makeStyles(() => ({
  modal: ({ open }) => ({
    display: open ? "flex" : "none",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    left: "50%",
    transition: "300ms ease-in-out",
    transform: open
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0)",
    boxShadow: "none",
    zIndex: 100,
    maxWidth: "80vw",
  }),
  header: ({ darkMode }) => ({
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: `${darkMode ? "#292a2e" : "#b8b8b8"}`,
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #B8B8B8",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: `solid 1px ${darkMode ? "#292a2e" : "#b8b8b8"}`,
    "& h1": {
      color: `${darkMode ? "#fff" : "#292a2e"}`,
      paddingLeft: 15,
    },
    "& button": {
      color: `${darkMode ? "#fff" : "#292a2e"}`,
      backgroundColor: "transparent",
      border: "none",
      fontSize: 28,
      cursor: "pointer",
      fontWeight: "bold",
      outline: "none",
      paddingRight: 15,
    },
  }),
}));

const PlayerModal = (props) => {
  const { videoTitle, open, setOpen, darkMode, playerProps } = props;
  const classes = useStyles({ open, darkMode });

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <h1 className={classes.title}>{videoTitle}</h1>
        <button onClick={() => setOpen(!open)}>&times;</button>
      </div>
      <div className={classes.body}>
        <ReactPlayer {...playerProps} />
      </div>
    </div>
  );
};

PlayerModal.propTypes = {
  videoTitle: PropTypes.string,
  playerProps: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default PlayerModal;
