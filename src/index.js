import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Appv2";
// import StarRating from "./stars";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="violet"
//         maxRating={10}
//         onSetRating={setMovieRating}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
