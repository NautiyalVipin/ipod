
  const menuItems = ["Cover", "Music", "Games", "Settings"];


// Display Menu screen 1, hovering items as per the prop itemHoverIndex
const DisplayMenuItems = (props) => {
    const{itemHoverIndex,menuList}=props
    return (
      <ul id="menuList" style={menuList}>
        MENU
        {menuItems.map((item, index) => {
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


export default DisplayMenuItems