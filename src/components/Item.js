import React from "react";
import "./Item.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useStateValue } from "../StateProvider";

function Item({ imgSrc, title, price, colors, type }) {
  const[{favList},dispatch]=useStateValue();

  const addtoFav = () => {
    dispatch({
      type: "ADD_TO_FAV",
      Item:{
        imgSrc: imgSrc,
        title:title,
        price:price,
        colors:colors,
        type:type
      }
    })
  };

  return (
    <div className="item">
      <div className="item_img">
        <img src={imgSrc} alt="item image" />
        <div className="item_favIcon" onClick={addtoFav}>
          <FavoriteBorderIcon />
        </div>
      </div>
      <div className="item_text">
        <h3>{title}</h3>
        <span>${price}</span>
        <div className="item_colors">
          {Array(colors)
            .fill()
            .map((_, i) => (
              <p>{colors}</p>
            ))}
        </div>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default Item;
