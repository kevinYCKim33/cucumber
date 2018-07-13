import React from 'react';
import defaultMoviePic from '../defaultMoviePic.png';
import MovieDescription from './MovieDescription';


const Movie = ({movie, cutoffPoint}) => {

  let imageLink;
  if (movie.poster_path) {
    imageLink = `https://image.tmdb.org/t/p/w92/${movie.poster_path}`;
  } else {
    imageLink = defaultMoviePic
  }

  let releaseYear;
  if (movie.release_date) {
    releaseYear = "(" + movie.release_date.slice(0,4) + ")";
  }

  let overview;
  if (movie.overview) {
    overview = movie.overview;
  }

  return (
    <div className="movie">
      <div className="poster-holder">
        <img
          alt={movie.title}
          onError={(e)=>{e.target.src={defaultMoviePic}}}
          src={imageLink}
          width={92}
          height={138}
        />
      </div>
      <div>
        <div>
          {movie.title} {releaseYear}
        </div>
        <MovieDescription
          description={overview}
          cutoffPoint={cutoffPoint}
        />
      </div>
    </div>
  );
};

export default Movie;
