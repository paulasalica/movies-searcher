import React, { Component } from 'react';
import './searcher.css'

class Searcher extends Component {
    constructor (props) {
        super(props)
        this.state = {
            options: [
                {name: "movies", checked: false},
                {name: "series", checked: false},
                {name: "episodes", checked: false},
                {name: "year", checked: false}
            ]
        }
    }

    handleCheck = (event) => {
        let options = this.state.options;

        options.forEach(option => {
            if(option.name === event.target.name) {
                option.checked = event.target.checked;
            } 
        })   
        this.setState({options: options});

        console.log(this.state.options)
    }

    render() {
        const {movies} = this.props;
        console.log(movies);

        return (
            <div className="searcher">
                <div className="search">
                    <input type="text" name="search" className="input-search" placeholder="Search" value={searchTerm} onChange={handleOnChange}></input>
                </div>
                <div className="options">
                    <div className="option">
                        <input onChange={this.handleCheck} type="checkbox" checked={this.checked} name="movies" ></input>
                        <label>Movies</label>
                    </div>
                    <div className="option">
                        <input onChange={this.handleCheck} type="checkbox" checked={this.checked} name="series" ></input>
                        <label>Series</label>
                    </div>
                    <div className="option">
                        <input onChange={this.handleCheck} type="checkbox" checked={this.checked} name="episodes" ></input>
                        <label>Episodes</label>
                    </div>
                    <div className="option">
                        <input onChange={this.handleCheck} type="checkbox" checked={this.checked} name="year" ></input>
                        <label>Year</label>
                    </div>
                </div>
                <div className="results">
                    <p className="text">No results found yet</p>
                </div>
            </div>
        )
    };
}

export default Searcher;