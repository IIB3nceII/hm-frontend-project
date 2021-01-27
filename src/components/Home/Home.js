import React from "react";
import AdCard from "../Ads/AdCard";
import AdPic from "../Ads/AdPic";
import "./Home.css";
import firstAdPic from "../../assets/adPic01.jpg";
import secondAdPic from "../../assets/adPic02.jpg";
import thirdAdPic from "../../assets/adPic03.jpg";
import Magazine from "./Magazine";
import Footer from "../Footer";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <AdCard
          title="Winter clearance - up to 70% off!"
          text="More styles added & even lower prices. Valid on selected items while stocks last."
          buttons={true}
          bgColor="#c9002e"
          textColor="white"
        />

        <AdPic
          title="Modern sportswear for trining at home"
          text="Treat yourself with new sporty styles"
          justOne={true}
          bgImg={firstAdPic}
          textTop={true}
        />

        <AdCard
          title="Free delivery for H&M members. Free and flexible returns."
          text="Order now and get your delivery within 2-4 days."
          buttons={false}
          bgColor="#f4eddd"
          textColor="black"
        />

        <AdPic
          title="The best basics"
          text="When comfort is key, dress accordingly"
          justOne={true}
          bgImg={secondAdPic}
          textTop={false}
        />

        <AdPic
          title="New jackets from $19.99"
          text="The layers to wear now & later"
          justOne={true}
          bgImg={thirdAdPic}
          textTop={true}
        />
      </div>
      <Magazine />
      <Footer />
    </div>
  );
}

export default Home;
