import { useRef, useReducer } from "react";
import ZingTouch from "zingtouch";
import Ipod from "./Ipod";
import reducer from "../Reducer/ReducerAndMusic";

/* ------------------------------ Structure of the Components  ------------------------------------------
                  
                  --------- App ---Reducer
                             | 
       -------------------- Ipod ----------------------------
      /            |         |              \                \ 
     /             |         |               \                \
 MusicPlayer  ControlPanel DisplayMenuItems  DisplayMusicItems Cover
 
 */

const App = () => {
  // Initialize Global State using useReducer
  const [state, dispatch] = useReducer(reducer, {
    itemHoverIndex: 0,
    itemSelectIndex: 0,
    screen: -1,
    lock: true,
    play: false,
    songIndex: 4,
    imageIndex:4,
  });

  const {imageIndex, itemHoverIndex, screen, itemSelectIndex, lock, play, songIndex } =
    state;

  // Global variable,unchanged throughout all renders, initialized for Rotate motion
  const rotateRef = useRef();

  // Play/Pause music- runs inside ControlPanel(play/pause)
  function togglePlay() {
    dispatch({ type: "play" });
  }

  // play next song - runs inside ControlPanel (forward-arrow)
  function nextSong() {
    dispatch({ type: "nextSong" });
  }

  // play previous song - runs inside ControlPanel (backward-arrow)
  function prevSong() {
    dispatch({ type: "prevSong" });
  }

  // select an item inside screen - runs inside ControlPanel (cicular button)
  function tap() {
    dispatch({ type: "selectScreen" });
  }

  // go back to previous screen - runs inside ControlPanel (MENU)
  function back() {
    dispatch({ type: "goBack" });
  }

  // track rotating motion via Zingtouch "rotate" applied on "rotateRef"  - runs inside ControlPaner (menu wheel)
  const rotate = (ref) => {
    const wheel = ref.current;
    let i = 0;
    let n = 4;
    let angle = 0;
    let region = new ZingTouch.Region(wheel);
    region.bind(wheel, "rotate", function (e) {
      //  Difference from last angle greater than 15
      if (Math.abs(e.detail.angle - angle) > 15) {
        if (e.detail.distanceFromLast === 0) {
          angle = e.detail.angle;
        } else if (e.detail.distanceFromLast >= 0) {
          i = (i + 1) % n; //Circular Counter for Clockwise rotation
          angle = e.detail.angle;
          dispatch({ type: "setItemHoverIndex", payload: i });
        } else if (e.detail.distanceFromLast < 0) {
          let j; //Reverse Circular Counter for anticlockwise rotation
          if (i === 0) {
            j = n - 1;
          } else {
            j = i - 1;
          }

          i = j % n;
          dispatch({ type: "setItemHoverIndex", payload: i });
          angle = e.detail.angle;
        }
      }
    });
  };

  return (
    <>
      <Ipod
        rotate={rotate}
        back={back}
        tap={tap}
        togglePlay={togglePlay}
        nextSong={nextSong}
        prevSong={prevSong}
        itemHoverIndex={itemHoverIndex}
        itemSelectIndex={itemSelectIndex}
        rotateRef={rotateRef}
        screen={screen}
        play={play}
        lock={lock}
        songIndex={songIndex}
        imageIndex={imageIndex}
      />
    </>
  );
};

export default App;
