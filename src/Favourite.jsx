import React from "react";
import "./Favourite.css";

const Favourite = ({ isLiked, onToggleLike }) => {
  return (
    <div id="button-div">
      {isLiked ? (
        <span onClick={onToggleLike} style={{ cursor: "pointer" }}>
          ⭐
        </span>
      ) : (
        <button onClick={onToggleLike} className="btn">
          Like
        </button>
      )}
    </div>
  );
};

export default Favourite;