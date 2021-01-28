import React from "react";
import "./Item.css";

function Item({ imgSrc, title, price, colors, type }) {
  return (
    <div className="item">
      <div className="item_img">
        <img src={imgSrc} alt="item image" />
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
