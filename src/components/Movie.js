import React from 'react';


const IMG_API = "https://image.tmdb.org/t/p/w1280"

const Movie = ({title,overview,poster_path,vote_average}) => {
  return (
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title}/>
        <div class="movie-info">
          <h3>{title}</h3>
          <span>{vote_average}</span>

        </div>
        <div class="movie-over">
           <h2>Overview:</h2>
            <p>{overview}</p>

        </div>
    </div>
  )
}

export default Movie