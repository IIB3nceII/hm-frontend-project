import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HMLogo from "../assets/hm-logo.svg";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Header() {
  const [menuvisibility, setmenuvisibility] = useState(false);

  const [dropDownVisibility, setDropDownVisibility] = useState(false);

  const menuOptions = [
    {
      name: "Women",
      endpoint: "women",
      dropdownMenuItems: [
        {
          name: "New Arrivals",
          options: [
            { name: "View All", endp: "/women/newarrivals/viewall" },
            { name: "Clothes", endp: "/women/newarrivals/clothes" },
            {
              name: "Shoes & Accessories",
              endp: "/women/newarrivals/shoesandaccessories",
            },
            {
              name: "Underwear & NightWear",
              endp: "/women/newarrivals/underwear",
            },
          ],
        },
        {
          name: "Offers",
          endp: "/women/offers",
          options: [
            "Sale",
            "Women's Bestselling Styles",
            "Join Loyality: get 10% off",
          ],
        },
        {
          name: "Trending Now",
          endp: "/women/trending",
          options: [
            "Work from Anywhere",
            "Trend edit",
            "Fashion Finds Under $30",
            "New Denim",
            "Warm Weather Shop",
          ],
        },
      ],
    },
    {
      name: "Men",
      endpoint: "men",
      dropdownMenuItems: [
        {
          name: "New Arrivals",
          options: ["View All", "Clothes", "Shoes & Accessories"],
        },
      ],
    },

    {
      name: "Divided",
      endpoint: "divided",
      dropdownMenuItems: [
        {
          name: "New Arrivals",
          options: ["View All", "Clothes", "Shoes & Accessories"],
        },
      ],
    },

    {
      name: "Baby",
      endpoint: "baby",
      dropdownMenuItems: [
        {
          name: "New Arrivals",
          options: ["View All", "Clothes", "Shoes & Accessories"],
        },
      ],
    },

    {
      name: "Kids",
      endpoint: "kids",
      dropdownMenuItems: [
        {
          name: "New Arrivals",
          options: ["View All", "Clothes", "Shoes & Accessories"],
        },
      ],
    },

    {
      name: "H&M HOME",
      endpoint: "hmhome",
      dropdownMenuItems: [
        {
          name: "New Arrivals",
          options: ["View All", "Clothes", "Shoes & Accessories"],
        },
      ],
    },

    {
      name: "Sale",
      endpoint: "sale",
      dropdownMenuItems: [
        {
          name: "New Arrivals",
          options: ["View All", "Clothes", "Shoes & Accessories"],
        },
      ],
    },

    {
      name: "Sustainability",
      endpoint: "sustainability",
      dropdownMenuItems: [
        {
          name: "",
          options: [],
        },
      ],
    },
  ];

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_left">
          <p>Customer Service</p>
          <p>Store Locator</p>
          <div className="header_dotmenu">
            <div
              className="header_leftDots"
              onClick={() => {
                setmenuvisibility(!menuvisibility);
              }}
            >
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
            <Link to="/">
              <img className="header_img" src={HMLogo} alt="HM Logo" />
            </Link>
          </div>
          <div className="header_centerMenu">
            {menuOptions.map((item) => (
              <div className="header_centerMenuOptions">
                <p
                  onClick={() => {
                    setDropDownVisibility(!dropDownVisibility);
                  }}
                >
                  {item.name}
                </p>
                {dropDownVisibility ? (
                  <div className="header_centerMenuDrop">
                    {item.dropdownMenuItems.map((opt) => (
                      <div className="header_centerMenuDropOpts">
                        <h3>{opt.name}</h3>

                        {opt.options.map((n) => (
                          <Link to={n.endp}>
                            <p className="opt_name">{n.name}</p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
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
