import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Searcher from '../components/Searcher';

const SEARCH_API = "http://omdbapi.com/?apikey=db9d0705&t=pokemon";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(SEARCH_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);

    return (
        // Navbar
        // Searcher (search - movies/series)
        <React.Fragment>
            <Navbar/>
            <Searcher/>
        </React.Fragment>
        
    );
}

export default Home;