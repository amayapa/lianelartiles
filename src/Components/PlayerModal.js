import React from "react";
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
  const { video, videoTitle, open, setOpen, darkMode } = props;
  const classes = useStyles({ open, darkMode });

  const handleOnClose = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <h1 className={classes.title}>{videoTitle}</h1>
        <button onClick={() => handleOnClose()}>&times;</button>
      </div>
      <div className={classes.body}>
        <ReactPlayer
          url={video}
          controls
          width="720px"
          height="405px"
          style={{
            maxWidth: "80vw",
          }}
          playing={open}
        />
      </div>
    </div>
  );
};

PlayerModal.propTypes = {
  video: PropTypes.string,
  videoTitle: PropTypes.string,
  open: PropTypes.bool,
  darkMode: PropTypes.bool,
};

export default PlayerModal;
