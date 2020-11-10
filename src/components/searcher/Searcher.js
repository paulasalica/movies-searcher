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
                    <ul>
                        <li>
                            <input onChange={this.handleCheck} type="checkbox" checked={this.checked} className="option" name="movies" ></input>
                            <label>Movies</label>
                        </li>
                        <li>
                            <input onChange={this.handleCheck} type="checkbox" checked={this.checked} className="option" name="series" ></input>
                            <label>Series</label>
                        </li>
                        <li>
                            <input onChange={this.handleCheck} type="checkbox" checked={this.checked} className="option" name="episodes" ></input>
                            <label>Episodes</label>
                        </li>
                        <li>
                            <input onChange={this.handleCheck} type="checkbox" checked={this.checked} className="option" name="year" ></input>
                            <label>Year</label>
                        </li>

                        {/* {
                            this.state.options.map((option, index) => {
                                return (<Checkbox key={index} handleCheck={this.handleCheck} {...option} />)
                            })
                        } */}
                    </ul>
                </div>

            </div>
            

        )
    };
}

export default Searcher;