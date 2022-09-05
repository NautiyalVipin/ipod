// Songs list mp3 sources
const songs = [
  require("../assets/songs/1.mp3"),
  require("../assets/songs/2.mp3"),
  require("../assets/songs/3.mp3"),
  require("../assets/songs/4.mp3"),
  require("../assets/songs/5.mp3"),
  require("../assets/songs/6.mp3"),
  require("../assets/songs/7.mp3"),
  require("../assets/songs/8.mp3"),
];

// Declaring audio object 
const audio = new Audio(songs[0]);


// Reducer function
const Reducer = (state, action) => {
  switch (action.type) {
    // play/pause songs in MusicPlayer

    case "play":
      if (state.play) {
        audio.pause();
      } else {
        audio.play();
      }
      return { ...state, play: !state.play };

    // next track in MusicPlayer

    case "nextSong":
      audio.src=songs[state.songIndex%7]
      if(state.play){
        audio.play();
      }
   
      return { ...state, songIndex: state.songIndex + 1 };

    // previous track in MusicPlayer

    case "prevSong":
      audio.src=songs[state.songIndex%7]
      if(state.play){
        audio.play()
      }
     
      if (state.songIndex > 1) {
        return { ...state, songIndex: state.songIndex - 1 };
      }
      return { ...state };

    case "setItemHoverIndex":
      return { ...state, itemHoverIndex: action.payload };
    
    //-"Select" button Action-Type

    case "selectScreen":
      // Unlocking the Screen
      if (state.screen === -1) {
        return { ...state, lock: false, screen: state.screen + 1 };
      }
      // Jumping to Screen 2 when music(index 1) is selected
      if (state.screen === 1 && state.itemHoverIndex === 1) {
        return { ...state, screen: 3, itemSelectIndex: state.itemHoverIndex };
      }
      if (state.screen === 2 && state.itemSelectIndex === 0) {
        return { ...state, screen: 1,itemHoverIndex:0, itemSelectIndex: state.itemHoverIndex,imageIndex:state.itemHoverIndex };
      }
      // No increment in screen when screen is 0 or last(3)
      if (state.screen === 4 || state.screen === 2) {
        return { ...state };
      }
      // default increment in screen and selecting the hovered item index
      return {
        ...state,
        screen: state.screen + 1,
        itemSelectIndex: state.itemHoverIndex,
      };
    
      

    //"BACK/Menu" Button Action-type

    case "goBack":
      // Stopping from going back

      if (state.screen === -1) {
        return { ...state };
      }
      //  Resetting values
      if (state.screen === 0) {
        return {
          ...state,
          screen: -1,
          itemHoverIndex: 0,
          itemSelectIndex: 0,
          lock: true,
        };
      }
      // Jumping from screen 2 to 0

      if (state.screen === 3) {
        return { ...state, screen: 1 };
      }
      // default decrement in screen
      return { ...state, screen: state.screen - 1 };

    default:
      break;
  }
};

export default Reducer;
