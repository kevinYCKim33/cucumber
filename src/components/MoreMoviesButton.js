import React from 'react';

const MoreMoviesButton = ({loadMoreMovies}) => {
  return (
    <button onClick={loadMoreMovies} className="no-style-button">
      Show More Movies
    </button>
  );
};

export default MoreMoviesButton;
