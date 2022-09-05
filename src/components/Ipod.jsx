import React from "react";
import ControlPanel from "./ControlPanel";
import MusicPlayer from "./MusicPlayer";
import gameImage from "../assets/images/Games.jpg";
import settingImage from "../assets/images/settings.jpg";
import Cover from "./Cover";
import DisplayMenuItems from "./DisplayMenuItems";
import DisplayMusicItems from "./DisplayMusicItems";

let images= [
  require("../assets/images/9.jpg"),
  require("../assets/images/10.jpg"),
  require("../assets/images/11.jpg"),
  require("../assets/images/12.jpg"),
  require("../assets/images/bgMain.jpg"),
]

//-------------------------------  Ipod  Functional Component ------------------------------------------

const Ipod = (props) => {
  const {
    rotate,
    tap,
    back,
    rotateRef,
    screen,
    lock,
    itemHoverIndex,
    itemSelectIndex,
    play,
    nextSong,
    prevSong,
    togglePlay,
    songIndex,
    imageIndex,
  } = props;

  const screenStyle={
   
    backgroundImage: `url(${images[imageIndex]})`,
  }
  /*
   Screen -1 : Lockscreen
   Screen 0: without Lock
   Screen 1: Main Menu
   Screen 2: Main menu items(cover,games,settings) except Music
   Screen 3: Music menu items
   Screen 4: Music Player 
   */

  let DisplayScreen = () => {
    // eslint-disable-next-line
    switch (screen) {
      case -1:
        return <LockScreen />;
      case 1:
        return (
          <DisplayMenuItems
            itemHoverIndex={itemHoverIndex}
            menuList={style.menuList}
          />
        );
      case 2:
          // eslint-disable-next-line
        switch (itemSelectIndex) {
          case 0:
            return (
              <Cover
                itemHoverIndex={itemHoverIndex}
                screenItems={style.screenItems}
              />
            );
          case 2:
            return <Games />;
          case 3:
            return <Settings />;
        }
        // eslint-disable-next-line
      case 3:
        return (
          <DisplayMusicItems
            itemHoverIndex={itemHoverIndex}
            menuList={style.menuList}
          />
        );
      case 4:
        return <MusicPlayer play={play} songIndex={songIndex} />;
      default:
        return "";
    }
  };

  //Rendering Screen Dynamically as per the screen number and itemSelect Index inside "DisplayScreen" component

  return (
    <section id="body" style={style.bodyContainer}>
      <div style={style.ipodBody}>
        <div id="screen" className={lock ? "lock" : ""} style={screenStyle} >
          <DisplayScreen />
        </div>
        <ControlPanel
          tap={tap}
          back={back}
          rotate={rotate}
          rotateRef={rotateRef}
          play={play}
          togglePlay={togglePlay}
          nextSong={nextSong}
          prevSong={prevSong}
        />
      </div>
    </section>
  );
};

// -------------------------------------------  Styles  ----------------------------------------------
let style = {
  bodyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "98vh",
  },

  ipodBody: {
    width: 308,
    height: 500,
    backgroundColor: "silver",
    borderRadius: 20,
    padding: "25px 5px",
    boxShadow: "inset 0px -3px 15px 0px black",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  screenItems: {
    width: 300,
    height: 300,
    backgroundColor: "lavender",
    backgroundPosition: "center",
    backgroundColorSize: "cover",
  },
  menuList: {
    width: 160,
    height: 292,
    backgroundColor: "white",
    listStyle: "none",
    marginTop: 0,
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "100%",
    textAlign: "center",
    fontWeight: 900,
    paddingTop: 8,
    cursor: "default",
  },
  lockScreen: {
    width: 300,
    height: "10%",
    padding: "2rem 0",
    textAlign: "center",
  },
};
// ---------------------------------- Menu Items Functional Components--------------------------------------

function Games() {
  return (
    <div id="games" style={style.screenItems}>
      <img src={gameImage} alt="" />
    </div>
  );
}
function Settings() {
  return (
    <div id="settings" style={style.screenItems}>
      <img src={settingImage} alt="" />
    </div>
  );
}
function LockScreen() {
  return (
    <>
      <h2 style={style.lockScreen}>Screen Locked</h2>
      <h3 style={style.lockScreen}>Click on the circular button to Unlock</h3>
    </>
  );
}

export default Ipod;
