import React from "react";
import "./AdPic.css";

function AdPic({ title, text, justOne, bgImg, textTop }) {
  return (
    <div className="adPic" style={{ background: `url(${bgImg})` }}>
      <div className={`adPic_textContainer ${!textTop &&"textDown"}`} >
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="adPic_buttons">
          {justOne ? (
            <div className="adPic_buttonsButton">
              <button><p>Shop Now</p></button>
            </div>
          ) : (
            <div className="adPic_buttonsButton">
              <button><p>11/2-10 Y</p></button>
              <button><p>8-14+ Y</p></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdPic;
