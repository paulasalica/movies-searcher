import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Searcher from '../components/searcher/Searcher';

const SEARCH_API = "http://omdbapi.com/?apikey=db9d0705&t=";

function Home() {
    const [movies, setMovies] = useState([]);
    // const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        fetch(SEARCH_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);

    const handleOnSubmit = (value) => {
        // value.preventDefault();

        fetch(SEARCH_API + value)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
        console.log(movies);
        console.log()
    };

    return (
        <React.Fragment>
            <Navbar/>
            <Searcher movies={movies} handleOnSubmit={handleOnSubmit}/>
            
        </React.Fragment>
        
    );
}

export default Home;