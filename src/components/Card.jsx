import React from "react";

function Card(data) {
  let badgeText;
  if (data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (data.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img
        src={`../assets/img/${data.coverImg}`}
        alt="card"
        className="card-img"
      />
      {badgeText && <button className="status-current">{badgeText}</button>}
      <div className="starts">
        <img src="../assets/img/Star1.png" alt="start" className="start-icon" />
        <span className="rating">{data.stats.rating}</span>
        <span className="gray countfb">({data.stats.reviewCount}) ● </span>
        <span className="gray">USA</span>
      </div>
      <p className="card-title">{data.title}</p>
      <p>
        <span className="bold">From ${data.price} </span>/ person
      </p>
    </div>
  );
}

export default Card;
