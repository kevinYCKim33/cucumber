import React from 'react';
import Movie from './Movie';
import MoreMoviesButton from './MoreMoviesButton';

const MoviesList = ({ moviesResults, searchTerm, totalResults, page, totalPages, loadMoreMovies }) => {

  const movies = moviesResults.map((movie) => {
    return (
      <div key={movie.id}>
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
        {page < totalPages &&
          <MoreMoviesButton
            loadMoreMovies={loadMoreMovies}
          />
        }
      </div>
    </div>
  )
}

export default MoviesList;
