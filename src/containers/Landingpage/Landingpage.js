import React from "react";
import Card from "../../components/cards/Card";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/navbar";
import "./Landingpage.css";
import svg from "../../sources/images/codethinking.svg";
import svg2 from "../../sources/images/Coding _Flatline.svg";
import svg3 from "../../sources/images/img2.svg";

export default function Landingpage() {
  return (
    <div>
      {/* bg container */}
      <div className="bg-container"></div>
      {/* nav bar */}
      <Navbar />
      {/* img background */}
      <div className="img-container">
        <img src={svg2} alt="not found" />
      </div>
      {/* hero*/}
      <Hero />
      {/* cards */}

      <div className="card-grid-container">
        <Card title="For developers" btn="Start" />
        <Card title="For trainers" btn="Grade up" />
      </div>
    </div>
  );
}
