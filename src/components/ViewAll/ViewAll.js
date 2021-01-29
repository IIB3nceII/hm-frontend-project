import React, { useState } from "react";
import AdCard from "../Ads/AdCard";
import Sidebar from "../Sidebar";
import "./ViewAll.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TuneIcon from "@material-ui/icons/Tune";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import Item from "../Item";

function ViewAll() {
  const [state, setstate] = useState(false);

  return (
    <div className="viewAll">
      <Sidebar />
      <div className="viewAll_container">
        <AdCard
          title="Members get more! Enjoy free shipping over $30 through 1/31"
          buttons={false}
          bgColor="#1b1847"
          textColor="white"
        />
        <div className="viewAll_Menu">
          <h2>View All</h2>
          <div className="viewAll_optionContainer">
            <div className="viewAll_options">
              <div className="option">
                <div className="option_title" onClick={() => setstate(!state)}>
                  <p>Sort by</p>
                  <ExpandMoreIcon />
                </div>
                {state ? (
                  <div className="option_list">
                    <p>Name</p>
                    <p>Price</p>
                  </div>
                ) : null}
              </div>
              <div className="option">
                <div className="option_title" onClick={() => setstate(!state)}>
                  <p>Size</p>
                  <ExpandMoreIcon />
                </div>
                {state ? (
                  <div className="option_list">
                    <p>small</p>
                    <p>normal</p>
                    <p>large</p>
                  </div>
                ) : null}
              </div>
              <div className="option">
                <div className="option_title" onClick={() => setstate(!state)}>
                  <p>Colour</p>
                  <ExpandMoreIcon />
                </div>
                {state ? (
                  <div className="option_list">
                    <p>black</p>
                    <p>white</p>
                  </div>
                ) : null}
              </div>
              <div className="option">
                <div className="option_title" onClick={() => setstate(!state)}>
                  <p>Pattern</p>
                  <ExpandMoreIcon />
                </div>
                {state ? (
                  <div className="option_list">
                    <p>no pattern</p>
                    <p>pattern</p>
                  </div>
                ) : null}
              </div>
              <div className="option">
                <div className="option_title" onClick={() => setstate(!state)}>
                  <p>Product Type</p>
                  <ExpandMoreIcon />
                </div>
                {state ? (
                  <div className="option_list">
                    <p>T-shirt</p>
                    <p>Jeans</p>
                  </div>
                ) : null}
              </div>
              <div className="option">
                <TuneIcon />
                <p>All filters</p>
              </div>
            </div>

            <div className="viewAll_data">
              <p className="data_item">(123) items</p>
              <p className="data_item">Model</p>
              <p className="data_item">Product</p>
              <CheckBoxOutlineBlankOutlinedIcon className="data_item" />
              <DashboardOutlinedIcon className="data_item" />
            </div>
          </div>
        </div>

        <div className="viewAll_items">
          <div className="viewAll_itemsRow">
            <Item
              imgSrc=""
              title="Side-stripe Joggers"
              price="34.99"
              type="New Arrival"
              size="small"
            />

            <Item
              title="Side-stripe Joggers"
              price="34.99"
              type="New Arrival"
              size="small"
            />

            <Item
              title="Side-stripe Joggers"
              price="34.99"
              type="New Arrival"
              size="small"
            />

            <Item
              title="Side-stripe Joggers"
              price="34.99"
              type="New Arrival"
              size="large"
            />
          </div>
          <div className="viewAll_itemsRow">
            <Item
              title="Side-stripe Joggers"
              price="34.99"
              type="New Arrival"
              size="small"
            />

            <Item
              title="Side-stripe Joggers"
              price="34.99"
              type="New Arrival"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
