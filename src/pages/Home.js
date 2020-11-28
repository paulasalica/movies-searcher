import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Searcher from '../components/searcher/Searcher';
import Movie from '../components/movie/Movie';

const SEARCH_API = "http://omdbapi.com/?apikey=db9d0705&t=";

function Home() {
    const [movies, setMovies] = useState([]);
    // const [searchTerm, setSearchTerm] = useState([]);
   
    useEffect(() => {
        fetch(SEARCH_API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);

    const handleOnSubmit = async (value) => {
        // value.preventDefault();

        fetch(SEARCH_API + value)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setMovies(data);
            });

    };

    // console.log(movies);
    return (
        <React.Fragment>
            <Navbar/>
            <Searcher movies={movies} handleOnSubmit={handleOnSubmit}/>
            <Movie movie={movies}/>
        </React.Fragment>
        
    );
}

export default Home;