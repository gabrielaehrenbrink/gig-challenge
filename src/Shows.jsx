import React, { useState, useEffect } from "react";
import "./Shows.css"

const Shows = (props) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const URL = "https://makers-gig-backend.onrender.com/events";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <>
      <h3>Other Artists:</h3>
      <div>
        {shows.map((showData) => (
          <SingleShow key={showData.id} data={showData} />
        ))}
      </div>
      
    </>
  );
};

const SingleShow = ({ data }) => {
  return (
    <div id="shows-div">
    <div key={data.id}>
      <p><strong>{data.band_name}</strong></p>
      <p>{data.description}</p>
      <p>{data.time}</p>
      <p>{data.location}</p>
    </div>
    </div>
  );
};

export default Shows;
