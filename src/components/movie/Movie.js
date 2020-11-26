import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => {
    const {title, poster} = movie;
    console.log(poster);
    return (
        <div className="movie">
            this is a movie component    
            <img src={poster} alt={title}></img>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object,
};

export default Movie;