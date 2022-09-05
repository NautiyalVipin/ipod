 
 
 const musicMenuItems = ["Songs", "Playlist", "Artists", "Albums"];
  
  // Display Menu for Music Screen 2, hovering items as per the prop itemHoverIndex
  const DisplayMusicItems = (props) => {
    const{itemHoverIndex,menuList} = props
    return (
      <ul id="menuList" style={menuList}>
        MUSIC
        {musicMenuItems.map((item, index) => {
          if (index === itemHoverIndex) {
            return (
              <li key={index} className="list active">
                <span>{item}</span>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
            );
          } else {
            return (
              <li key={index} className="list">
                <span>{item}</span>
              </li>
            );
          }
        })}
      </ul>
    );
  };

  export default DisplayMusicItems;