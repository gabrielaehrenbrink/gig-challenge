import React from "react";
import Favourite from "./Favourite";
import "./Gig.css";

const Gig = ({ gig, onToggleFavorited }) => {
  const { id, event, date, location, favorited } = gig;

  return (
    <div id="gig">        
      <div id="header">
        <h2 id="location">{location}</h2>
      </div>
      <div id="content">
        <div id="info">
          <p id="event">{event}</p>
          <p id="date">{date}</p>
          <Favourite
          isLiked={favorited}
          onToggleLike={() => onToggleFavorited(id)}
        />
        </div>
      </div>
    </div>
  );
};

export default Gig;