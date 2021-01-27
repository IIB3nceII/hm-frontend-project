import React from "react";
import "./Magazine.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import firstMagazinePic from "../../assets/magazineAd01.jpg";
import secondMagazinePic from "../../assets/magazineAd02.jpg";
import thirdMagazinePic from "../../assets/magazineAd03.jpg";

function Magazine() {
  return (
    <div className="magazine">
      <div className="magazine_container">
        <h1>Magazine</h1>
        <p>Read h&m magazine</p>
        <div className="grid">
          <div className="grid_item">
            <img src={firstMagazinePic} alt="" />
            <div className="grid_itemText">
              <h3>Inside H&M</h3>
              <p>A study sustainable style</p>
              <div className="grid_read">
                <p>Read the story</p>
                <ArrowForwardIcon />
              </div>
            </div>
          </div>

          <div className="grid_item">
            <img src={secondMagazinePic} alt="" />
            <div className="grid_itemText">
              <h3>Inside H&M</h3>
              <p>"Gratitude is a must"</p>
              <div className="grid_read">
                <p>Read the story</p>
                <ArrowForwardIcon />
              </div>
            </div>
          </div>

          <div className="grid_item">
            <img src={thirdMagazinePic} alt="" />
            <div className="grid_itemText">
              <h3>Inside H&M</h3>
              <p>Consicous Exclusive A/W20</p>
              <div className="grid_read">
                <p>Read the story</p>
                <ArrowForwardIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Magazine;
