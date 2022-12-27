import React from "react";
import start from "../assets/img/Star1.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="people" className="card-img" />
      {props.status && (
        <button className="status-current">{props.status}</button>
      )}
      <div className="starts">
        <img src={start} alt="start" className="start-icon" />
        <span>{props.countStart}</span>
        <span className="gray">({props.countFeedback}) ● </span>
        <span className="gray">USA</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.money} </span>/ person
      </p>
    </div>
  );
}

export default Card;
