import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Searcher from '../components/searcher/Searcher';
import Movie from '../components/movie/Movie';

const SEARCH_API = "http://omdbapi.com/?apikey=db9d0705";

function Home() {
    const [movies, setMovies] = useState([]);
   
    useEffect(() => {
        fetch(SEARCH_API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);

    const handleOnSubmit = async (value) => {
        // value.preventDefault();
    
        // console.log(value);
        fetch(SEARCH_API + value)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.value);
                setMovies(data);
            });

    };

    console.log(movies);
    return (
        <React.Fragment>
            <Navbar/>
            <Searcher movies={movies} handleOnSubmit={handleOnSubmit}/>
            <Movie movies={movies}/>
        </React.Fragment>
        
    );
}

export default Home;