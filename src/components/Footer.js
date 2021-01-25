import React from "react";
import "./Footer.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import hmLogo from '../assets/hm-logo.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_containerUpper">
          <div className="footer_containerColumn normal">
            <h3>Shop</h3>
            <p>Women</p>
            <p>Divided</p>
            <p>Men</p>
            <p>Kids</p>
            <p>H&M HOME</p>
          </div>
          <div className="footer_containerColumn normal">
            <h3>Corporate Info</h3>
            <p>Career at H@M</p>
            <p>About H&M group</p>
            <p>Sustainability</p>
            <p>Press</p>
            <p>Investor Relations</p>
            <p>Corporate Goverance</p>
          </div>
          <div className="footer_containerColumn normal">
            <h3>Help</h3>
            <p>Customer Service</p>
            <p>My Account</p>
            <p>Store Locator</p>
            <p>Legal & Privacy</p>
            <p>Contact</p>
            <p>Gift Cards</p>
          </div>
          <div className="footer_containerColumn become">
            <h3>Become a member</h3>
            <p>
              Join and get 10% off your second purchase, and free returns on all
              online purchases!
            </p>
            <div className="become_readMore">
              <p>Read More</p>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>

        <div className="footer_containerLower">
          <div className="lower_icons">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <PinterestIcon />
          </div>
          <div className="lower_terms">
            <p>
              The content of this site is copyright-protected and is the
              property of H & M Hennes & Mauritz AB. H&M’s business concept is
              to offer fashion and quality at the best price in a...
            </p>
            <span>Read More</span>
          </div>
          <div className="footer_logoAndLang">
              <img src={hmLogo} alt="HM LOGO" />
              <p>Canada (en) | $</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
