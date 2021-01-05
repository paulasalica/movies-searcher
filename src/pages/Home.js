import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Searcher from '../components/searcher/Searcher';
import Movie from '../components/movie/Movie';

const SEARCH_API = "http://omdbapi.com/?apikey=db9d0705";

function Home() {
    const [movies, setMovies] = useState([]);
    const [dataMovie, setDataMovie] = useState([]);
   
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
                // console.log(data.value);
                setMovies(data);
            });
    };

    async function getDataMovie(value) {
        console.log(SEARCH_API +  value);
        fetch(SEARCH_API +  value)
            .then((response) => {return response.json()})
            .then((data) => {
                console.log(data);
                setDataMovie(data);
            });
        console.log(dataMovie);
    };
    console.log(movies);
    return (
        <React.Fragment>
            <Navbar/>
            <Searcher movies={movies} handleOnSubmit={handleOnSubmit}/>
            <Movie movies={movies} data={dataMovie} handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
        
    );
}

export default Home;