import React, { useState } from "react";
import "./Header.css";
import HMLogo from "../assets/hm-logo.svg";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Header() {
  const [menuvisibility, setmenuvisibility] = useState(false);

  const showMenuHandler = (e) => {
    e.preventDefault();

    setmenuvisibility(!menuvisibility);
  };

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_left">
          <p>Customer Service</p>
          <p>Store Locator</p>
          <div className="heder_dotmenu">
            <div className="header_leftDots" onClick={showMenuHandler}>
              <MoreHorizIcon />
            </div>
            {menuvisibility ? (
              <div className="header_leftMore">
                <p>Newsletter</p>
                <p>Download Android</p>
                <p>Download IOS</p>
                <p>Download high-contrast mode</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="header_center">
          <div className="header_logo">
            <img src={HMLogo} alt="HM Logo" />
          </div>
          <div className="header_centerMenu">
            <p>Woman</p>
            <p>Men</p>
            <p>Divided</p>
            <p>Baby</p>
            <p>Kids</p>
            <p>H&M HOME</p>
            <p>Sale</p>
            <p>Sustainability</p>
          </div>
        </div>

        <div className="header_right">
          <div className="header_rightNav">
            <div className="header_rightNav_signIn">
              <PersonOutlineIcon />
              <p>Sign in</p>
            </div>
            <div className="header_rightNav_signIn">
              <FavoriteBorderIcon />
              <p>Favourites</p>
            </div>
            <div className="header_rightNav_basket">
              <LocalMallIcon />
              <p>Shopping bag(0)</p>
            </div>
          </div>
          <div className="header_rightSearch">
            <SearchIcon />
            <input type="text" placeholder="Search products" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
