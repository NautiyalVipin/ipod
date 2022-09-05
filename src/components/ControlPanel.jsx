import React from "react";
import { useEffect } from "react";

// -------------- TouchPanel Functional Component(wheel touchpad area) -------------------------

const ControlPanel = (props) => {
  const { rotate, tap, back, rotateRef, togglePlay, nextSong, prevSong } =
    props;

  useEffect(() => {
    rotate(rotateRef);
  }, []);

  return (
    <section id="control" style={style.controlSection}>
      <div id="wheel" draggable="false" ref={rotateRef} style={style.container}>
        {/* MENU/Back button */}
        <div id="menu-btn" onClick={back} style={style.menuBtn}>
          Menu
        </div>
        {/* prev button */}
        <div id="prev-btn" onClick={prevSong} style={style.prevBtn}>
          <i className="fas fa-backward"></i>
        </div>
        {/* next button */}
        <div id="next-btn" onClick={nextSong} style={style.nextBtn}>
          <i className="fas fa-forward"></i>
        </div>
        {/* play/pause button */}
        <div id="play-btn" onClick={togglePlay} style={style.playBtn}>
          <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
        </div>
      </div>
      {/* Select button */}
      <div onClick={tap} id="okay-btn" style={style.selectBtn}></div>
    </section>
  );
};

// ------------------------------ Styles -----------------------------------

let style = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    height: 150,
    width: 150,
    background: "ivory",
    alignItems: "center",
    borderRadius: "50%",
    margin: "20px auto",
    color: "#9E9E9E",
    cursor: "pointer",
  },
  menuBtn: {
    gridArea: "1/1/2/4",
    fontWeight: "900",
    justifySelf: "center",
  },
  prevBtn: {
    gridArea: "2/1/3/2",
    justifySelf: "center",
  },
  nextBtn: {
    gridArea: "2 / 3 / 3 / 4",
    justifySelf: "center",
  },
  playBtn: {
    gridArea: "3/2/4/3",
    justifySelf: "center",
    fontSize: 12,
  },
  selectBtn: {
    borderRadius: "50%",
    background: "silver",
    width: 60,
    height: 60,
    position: "absolute",
    boxShadow: "0 0 4px 0px black",
  },
  controlSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default ControlPanel;
