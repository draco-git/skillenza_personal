import React, { useState } from "react";
import "./Cards.css";

export default function Card(props) {
  const [active, setactive] = useState("");
  const [btnactive, setbtnactive] = useState("card-button");
  const cardHover = () => {
    setactive("card-active");
    setbtnactive("card-button-active");
  };
  return (
    <div
      className="card"
      onMouseEnter={() => cardHover()}
      onMouseLeave={() => {
        setactive("");
        setbtnactive("card-button");
      }}
    >
      <div className={"card-title " + active}>{props.title}</div>
      <div className="card-info">
        Engage your employees and foster a culture of innovation to impart
        corporate culture, build teamwork and collaboration skills.
      </div>
      <div className={btnactive}>
        <button>{props.btn}</button>
      </div>
    </div>
  );
}
