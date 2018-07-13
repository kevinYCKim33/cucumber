import React from 'react';
import Movie from './Movie';

const MoviesList = ({ moviesResults, id, searchTerm, totalResults, page, totalPages }) => {

  const movies = moviesResults.map((movie) => {
    return (
      <div key={id}>
        <Movie movie={movie}/>
        <hr />
      </div>
    );
  });

  return (
    <div className="search-results">
      <h1>
        Search results for: {searchTerm}
      </h1>

      <div className="search-count">
        MOVIES ({totalResults})
      </div>

      <hr/>

      <div>
        {movies}
      </div>
    </div>
  )
}

export default MoviesList;
