 

  const coverItems = [
    require("../assets/images/9.jpg"),
    require("../assets/images/10.jpg"),
    require("../assets/images/11.jpg"),
    require("../assets/images/12.jpg")
   ]
 
 // Display Screen 1 item cover(0), hovering items as per the prop itemHoverIndex
  const Cover = (props) => {
    const {itemHoverIndex,screenItems}=props
    return (
      <div draggable={false} className="cover" id="cover"  style={screenItems}>
        {coverItems.map((item,index) => {
          if (index === itemHoverIndex) {
            return (
              <img
                id="borderBlack"
                src={item}
                alt=""
                key={index}
              />
            );
          }
          return  <img src={item} key={index} alt="" />;
        })}
      </div>
    );
  };

  export default Cover;
