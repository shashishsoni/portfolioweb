import React from "react";
import "../Styles/background.css";
import video from "../assets/hacki3.mp4";

const Background = () => {
  return (
    <div className="background">
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;