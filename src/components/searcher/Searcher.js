import React, { Component } from 'react';
import './searcher.css'

class Searcher extends Component {
    constructor (props) {
        super(props)
        this.state = {
            options: [
                {id:1, name: "movies", checked: false},
                {id:2, name: "series", checked: false},
                {id:3, name: "episodes", checked: false},
                {id:4, name: "year", checked: false}
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

        return (
            <div className="searcher">
                <div className="search">
                    <input type="text" name="search" className="input-search" placeholder="Search"></input>
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
            </div>
        )
    };
}

export default Searcher;