import React from "react";
import "./style/Card.css";
function Card({ name }) {
  return (
    <div className="card-wrapper">
      <img
        src={`https://robohash.org/31?set=set2&size=150x150`}
        alt={"monster-testName"}
        width={150}
      />
      <h3 className="title">{name}</h3>
      <p className="email">Email</p>
    </div>
  );
}

export default Card;
