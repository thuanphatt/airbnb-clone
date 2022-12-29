import React from "react";

function Card(data) {
  console.log(data);
  return (
    <div className="card">
      <img
        src={`../assets/img/${data.coverImg}`}
        alt="card"
        className="card-img"
      />
      {data.location && (
        <button className="status-current">{data.location}</button>
      )}
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
