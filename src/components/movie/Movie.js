import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movie.css';

const Movie = (movies) => {
    try {
        console.log(movies);
        var {Title, Poster, imdbID, Error} = movies.movies;
        // console.log(Poster);
    } catch(error) {
        var {Title, Poster, imdbID, Error} = movies;
    }

    if (Title) {
        return (
            <div className="movie">
                <img src={Poster} alt={Title}></img>
                <div className="movie-info">
                    <h3>{Title}</h3>
                </div>
                <div class="details-movie">
                    <Link to={`/movies/${imdbID}`} className="details">Details</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="error">
                <p className="text">{Error}</p>
            </div>
        );
    }
   
    
};

Movie.propTypes = {
    movies: PropTypes.object,
};

export default Movie;