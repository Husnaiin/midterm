// import React, { useState } from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Cards from "./components/MovieList";
// import Footer from "./components/Footer/Footer";
// import { list, list2 } from "./components/MovieItem/movieitems";

// function App() {
//   const [selectedFilter, setSelectedFilter] = useState(0);
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (searchTerm) => {
//     console.log('Searching for:', searchTerm);
    
//     const filteredResults = (selectedFilter === 0 ? list : list2).filter(
//       movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };

//   const handleGenreChange = () => {
//     setSelectedFilter(selectedFilter === 0 ? 1 : 0);
//     setSearchResults([]); // Clear search results when changing genre
//   };

//   return (
//     <div className="App">
//       <Header onSearch={handleSearch} />
//       <main>
//         <button onClick={handleGenreChange} className="genre-button">
//           {selectedFilter === 0 ? "Switch to Genre 2" : "Switch to Genre 1"}
//         </button>
//         <Cards list={searchResults.length > 0 ? searchResults : (selectedFilter === 0 ? list : list2)} />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/MovieList";
import Footer from "./components/Footer/Footer";
import { list, list2 } from "./components/MovieItem/movieitems";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const savedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    setRecentlyViewed(savedRecentlyViewed);

    return () => {
      localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    };
  },[]);

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    
    const filteredResults = (selectedFilter === 0 ? list : list2).filter(
      movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleGenreChange = () => {
    setSelectedFilter(prevFilter => prevFilter === 0 ? 1 : 0);
    setSearchResults([]);
  };

  const handleMovieClick = (movie) => {
    setRecentlyViewed(prevViewed => {
      const updatedViewed = [movie, ...prevViewed.filter(item => item.id !== movie.id)].slice(0, 5);
      return updatedViewed;
    });
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <main>
        <button onClick={handleGenreChange} className="genre-button">
          {selectedFilter === 0 ? "Switch to Genre 2" : "Switch to Genre 1"}
        </button>
        
        {recentlyViewed.length > 0 && (
          <div className="recently-viewed">
            <h2>Recently Viewed</h2>
            <div className="recently-viewed-list">
              {recentlyViewed.map(movie => (
                <div key={movie.id} className="recently-viewed-item">
                  {movie.title}
                </div>
              ))}
            </div>
          </div>
        )}

        <Cards 
          list={searchResults.length > 0 ? searchResults : (selectedFilter === 0 ? list : list2)} 
          onMovieClick={handleMovieClick}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;