import Items from "../Items";
import { useState } from "react";
const Fooditems = ({ food }) => {
  const [activeitem, setactiveitem] = useState([]);

  let onBuybtn = (item, event) => {
    let newitem = [...activeitem, item];
    setactiveitem(newitem);
  };
  
  return (
    <>
      <ul className="list-group">
        {food.map((item) => (
          <Items
            bought={activeitem.includes(item)}
            handleBuybtn={(event) => onBuybtn(item, event)}
            key={item}
            listitem={item}
          ></Items>
        ))}
      </ul>
    </>
  );
};
export default Fooditems;
