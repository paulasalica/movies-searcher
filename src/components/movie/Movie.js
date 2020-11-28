import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => {
    console.log(movie);
    const {Title, Poster, imdbRating} = movie;
    console.log(Poster);
    return (
        <div className="movie">
            <img src={Poster} alt={Title}></img>
            <div className="movie-info">
                <h3>{Title}</h3>
                <span>{imdbRating}</span>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object,
};

export default Movie;