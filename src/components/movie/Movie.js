import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

const SEARCH_API = "http://omdbapi.com/?apikey=db9d0705";

export const Movie = (
    movies
) => {
    // var {Search, Error} = movies.movies;
    try {
        var moviesArray = movies.movies.Search;
        console.log(movies);
        var {Title, Poster, imdbID} = moviesArray;
    } catch(error) {
        // var {Error} = movies
    }

    const [details, setDetails] = useState(false);
    const [movieDetails, setMovieDestails] = useState();
    const [data, setData] = useState([]);

    let classMovie = 'movieActive';
    let classTitle = 'titleActive';
    let classImage = 'imageActive';
    let classButton = 'detailsActive';
    if (details) {
        classMovie = 'movieInactive';
        classTitle = 'titleInactive';
        classImage = 'imageInactive';
        classButton = 'detailsInactive';
    }

    if(movieDetails) {
        <div className="hola">
            holaaa
        </div>
    }

    const handleClick = (movie) => {
        setDetails(!details);
        setMovieDestails(movie);
        console.log("id"+movie.imdbID);
        handleOnSubmit("&i=" + movie.imdbID);
    }

    const handleOnSubmit = async (value) => {
        console.log(SEARCH_API +  value);
        fetch(SEARCH_API + value)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    };

    if (moviesArray) {
        return (
            <div className="movies">
                {moviesArray.map( (movie) =>
                    <div className="movie">
                        <img src={movie.Poster} alt={movie.Title} className={classImage}></img>
                        <div className="movie-info">
                            <h3 className={classTitle}>{movie.Title}</h3>
                            <a className={classButton} onClick={() => handleClick(movie)}>
                                Details
                            </a>
                        </div>
        
                        {details && movie==movieDetails? (
                            <div className="section-details">
                                <div className="data-left">
                                    <h3 className="titleMovie">{movie.Title}</h3>
                                    <img src={data.Poster}></img>
                                </div>
                                <div className="data">
                                    <div className="plot">
                                        <h3>Plot</h3>
                                        <p>{data.Plot}</p>
                                    </div>
                                    <div className="movie-info">
                                        <h3>Movie Info</h3>
                                        <ul className="info">
                                                <li><p>Rated: {data.Rated}</p></li>
                                                <li><p>Released: {data.Released}</p></li>
                                                <li><p>Runtime: {data.Runtime}</p></li>
                                                <li><p>Genre: {data.Genre}</p></li>
                                                <li><p>Director: {data.Director}</p></li>
                                                <li><p>Writer: {data.Writer}</p></li>
                                                <li><p>Actors: {data.Actors}</p></li>
                                                <li><p>Language: {data.Language}</p></li>
                                                <li><p>Country: {data.Country}</p></li>
                                                <li><p>Production: {data.Production}</p></li>
                                                <li><p>Website: {data.Website}</p></li>
                                        </ul>
                                    </div>
                                    <div className="ratings">

                                    </div>
                                </div>
                             
                                
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                )}               
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