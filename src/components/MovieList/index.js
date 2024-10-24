// import React from "react";
// import Card from "./card";
// import "./styles.css";
// function Cards({ list }) {
//   return (
//     <div className="cards-flex">
//       {list.map((card, i) => (
//         <Card card={card} key={i} />
//       ))}
//     </div>
//   );
// }

// export default Cards;

import React from "react";
import Card from "./card";
import "./styles.css";

function Cards({ list, onMovieClick }) {
  return (
    <div className="cards-flex">
      {list.map((movie) => (
        <Card key={movie.id} card={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  );
}

export default Cards;