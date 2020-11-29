import React, { useState } from 'react';
import './searcher.css';

export const Searcher = ({
    handleOnSubmit
}) => {
    const [searchKey, setSearchKey] = useState();
    const [searchMovies, setSearchMovies] = useState(["movies", false]);
    const [searchSeries, setSearchSeries] = useState(["series", false]);
    const [searchEpisodes, setSearchEpisodes] = useState(["episodes", false]);
    const [searchYear, setSearchYear] = useState(["year", false]);
    
    const handleCheck = (event) => {
        switch(event.target.name) {
            case "movies":
                setSearchMovies(["movies", !searchMovies[1]]);
                break;
            case "series":
                setSearchSeries(["series", !searchSeries[1]]);
                break;
            case "episodes":
                setSearchEpisodes(["episodes", !searchEpisodes[1]]);
                break;
            case "year":
                setSearchYear(["year", !searchYear[1]]);
                break;
            default:
        }
    }

    const handleOnClick = () => {
        let key = "&t=" + searchKey;

        if(searchMovies[1]) {
            key = key + "&type=movie";
        }
        if(searchSeries[1]) {
            key = key + "&type=series";
        }
        console.log(key);
        handleOnSubmit(key);
        
    }

    const handleOnChange = (e) => {
        setSearchKey(e.target.value);
        // console.log(searchKey);
    }

    // console.log(searchMovies, searchYear);
    return (
        <div className="searcher">
            <div className="search">
                <input type="text" name="search" className="input-search" placeholder="Search" value={searchKey} onChange={handleOnChange} ></input>
                <i class="fas fa-search" onClick={handleOnClick}></i>
            </div>
            <div className="options">
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="movies" checked={searchMovies[1]}></input>
                    <label>Movies</label>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox"  name="series" checked={searchSeries[1]}></input>
                    <label>Series</label>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="episodes" checked={searchEpisodes[1]}></input>
                    <label>Episodes</label>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="year" checked={searchYear[1]}></input>
                    <label>Year</label>
                </div>
            </div>
            <div className="results">
                <p className="text">No results found yet</p>
            </div>
        </div>
        
    )};
    

export default Searcher;