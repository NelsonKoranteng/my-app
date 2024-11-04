import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <img className="circle-img" src={props.img} alt="profile" />
        <h2 className="name">{props.name}</h2>
      </div>
      <div className="bottom">
        <p className="info">Phone: {props.tel}</p>
        <p className="info">Email: {props.email}</p>
        <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </div>
    </div>
  );
}

export default Card;
