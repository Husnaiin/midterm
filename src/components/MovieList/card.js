import React from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

function Card({ card ,onClick}) {
  return (
    
    <div className="card-box" onClick={onClick}>
    <div className="card-box">
      <div className="card-info">
        <div className="card-info-flex">
          <h3 className="card-title">{card.title}</h3>
          <div className="card-rating">
            <StarRateRoundedIcon />
            <p>{card.rating}</p>
          </div>
        </div>
        <p className="card-genre">{card.genre}</p>
        <p className="card-release-date">Release: {card.releaseDate}</p>
        <p className="card-duration">{card.duration}</p>
        <p className="card-director">Director: {card.director}</p>
      </div>
    </div>
    </div>
  );
}

export default Card;