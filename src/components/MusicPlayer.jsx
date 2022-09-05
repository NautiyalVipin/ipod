import React from "react";


// Songs sources and names list
let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    coverPath: require("../assets/images/1.jpg"),
  },
  {
    songName: "Cielo - Huma-Huma",
    coverPath: require("../assets/images/2.jpg"),
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    coverPath: require("../assets/images/3.jpg"),
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    coverPath: require("../assets/images/4.jpg"),
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    coverPath: require("../assets/images/5.jpg"),
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    coverPath: require("../assets/images/6.jpg"),
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    coverPath: require("../assets/images/7.jpg"),
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    coverPath: require("../assets/images/8.jpg"),
  },
];



// ----------------- Music Functional Component --------------------------------

const MusicPlayer = (props) => {
  const { songIndex, play } = props;

  return (
    <>
      <footer id="footer" style={styles.player}>
        <div style={styles.player}>
          {/* Song Name and Song Cover */}
          <img id="masterCover" src={songs[songIndex % 7].coverPath} alt="" />
          <p style={styles.text}>{songs[songIndex % 7].songName}</p>
          {/* Play/Pause icon toggle as per the prop "play" */}
          <div style={styles.icons}>
            <i className="fa-solid fa-shuffle"></i>
            <i id="previous" className="fa-solid fa-backward-step"></i>
            {play ? (
              <i id="masterPlay" className="fa-regular fa-circle-pause"></i>
            ) : (
              <i id="masterPlay" className="fa-regular fa-circle-play"></i>
            )}

            <i id="next" className="fa-solid fa-forward-step"></i>
            <i className="fa-solid fa-repeat"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

// ---------------------------  Styles  -------------------------------

let styles = {
  player: {
    width: "100%",
    height: "100%",
    backgroundImage:"linear-gradient(45deg,#3d25b2,#c347de)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    fontSize: 24,
    color: "rgba(255, 255, 255, 0.648)",
    paddingBottom: "0.5rem",
  },
  text:{
    fontSize:12,
    paddingBottom:4,
    fontWeight:50,
  }
};

export default MusicPlayer;
