import React from "react";
import "../../containers/Landingpage/Landingpage.css";
import Hero from "../hero/Hero";
import Card from "../cards/Card";
import svg from "../../sources/images/img7.svg";

export default function Home() {
  return (
    <div>
      <div className="anim">
        <div className="img-container">
          <img className="imgclass" src={svg} alt="not found" />
        </div>
        <Hero />
        <div className="card-grid-container">
          <Card title="For developers" btn="Start" />
          <Card title="For trainers" btn="Grade up" />
        </div>
      </div>
    </div>
  );
}
