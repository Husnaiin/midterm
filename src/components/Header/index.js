// import React from "react";
// import logo from "../../assets/logo/logoo.png"; // Replace with your movie logo
// import "./styles.css";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
// import BasicMenu from "./ProfileMenu";

// function Header() {
//   return (
//     <div className="navbar">
//       <img src={logo} alt="Movie App Logo" className="navbar-logo" />
//       <div className="search-bar">
//         <div className="search-bar-text">Movies</div>
//         <div className="search-bar-text">TV Shows</div>
//         <div className="search-bar-text2">Search titles</div>
//         <div className="search-icon-div">
//           <SearchRoundedIcon className="search-icon" />
//         </div>
//       </div>
  
//       <div className="profile-container">
//         <div className="watchlist">Watchlist</div>
//         <div className="watchlist">
//           <LocalMoviesIcon sx={{ fontSize: "1.3rem" }} />
//         </div>
//         <div className="profile-div">
//           <BasicMenu />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import logo from "../../assets/logo/logoo.png"; // Replace with your movie logo
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import BasicMenu from "./ProfileMenu";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Movie App Logo" className="navbar-logo" />
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <SearchRoundedIcon className="search-icon" />
        </button>
      </form>
  
      <div className="profile-container">
        <div className="watchlist">Watchlist</div>
        <div className="watchlist">
          <LocalMoviesIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;