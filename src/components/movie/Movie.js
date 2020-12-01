import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

const Movie = (movies) => {
    console.log(movies.movies.Title);
    // const {Title, Poster, Error} = movies;
    // console.log(Title);
   
    if(Error){
        return (
            <div className="error">
                <p className="text">{Error}</p>
            </div>
        );
    } else {
        return (
            <div className="movie">
                {/* <img src={Poster} alt={Title}></img>
                <div className="movie-info">
                    <h3>{Title}</h3>
                </div> */}
            </div>
        );
    }
    
};

Movie.propTypes = {
    movie: PropTypes.object,
};

export default Movie;