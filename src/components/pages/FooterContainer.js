import React from "react";
import TelegramCommunity from '../pages/TelegramCommunity'
import Footer from '../pages/footer'
import "./Footer-Container.css";
import TextSlide from "./TextSlide";


const FooterContainer = () => {
  return (
    <div className="FooterContainer">
      <TextSlide />
      <TelegramCommunity />
      <Footer />
    </div>
  );
};

export default FooterContainer;
