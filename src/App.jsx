import React, { useState } from "react";
import Gig from "./Gig";
import "./App.css";
import Shows from "./Shows"

const App = () => {
  const [gigs, setGigs] = useState([
    {
      id: 1,
      artist: "Taylor Swift",
      event: "The Eras Tour is the ongoing sixth concert tour by the American singer-songwriter Taylor Swift, who described it as a journey through all of her musical 'eras'.An homage to her albums, the Eras Tour is Swift's most expansive tour yet, with 151 shows across five continents. It is the highest-grossing tour of all time and the first to surpass $1 billion in revenue. Announced after the release of her tenth studio album, Midnights (2022), the Eras Tour is Swift's second all-stadium tour after the 2018 Reputation Stadium Tour. It commenced on March 17, 2023, in Glendale, United States, and is set to conclude on December 8, 2024, in Vancouver, Canada. The show spans over 3.5 hours, with a set list of 44 songs grouped into 10 distinct acts that portray the albums conceptually. It received rave reviews from critics, who emphasized its concept, production, aesthetics and immersive ambience, as well as Swift's musicianship, vocals, stage presence and versatility.",
      date: "21-06-2024",
      location: "London",
      favorited: false,
    },
    {
      id: 2,
      artist: "Taylor Swift",
      event: "In May 2024, Taylor Swift’s unique voice will rock Paris La Défense Arena for 4 exceptional tour dates. Enjoy amazing shows blending country and pop influences for a simply magical musical experience to the rhythm of generational anthems such as Love Story, Blank Space and Shake It Off. With her extraordinary stage performances, breathtaking sets and audience interaction, the American singer transports audiences to unexpected places for an immersive, emotionally-charged experience. Do not miss Taylor Swift concerts in Paris",
      date: "11-05-2024",
      location: "Paris",
      favorited: false,
    },
    
  ]);

  const toggleFavorited = (id) => {
    setGigs((prevGigs) =>
      prevGigs.map((gig) =>
        gig.id === id ? { ...gig, favorited: !gig.favorited } : gig
      )
    );
  };

  const sortedGigs = gigs.slice().sort((a,b) => (b.favorited ? 1 : 0) - (a.favorited ? 1 : 0));


  return (
    <div>
      <h1>The Eras Tour</h1>
      {sortedGigs.map((gig) => (
        <Gig key={gig.id} gig={gig} onToggleFavorited={toggleFavorited} />
      ))}

    <Shows />
    </div>
  );
};

export default App;


