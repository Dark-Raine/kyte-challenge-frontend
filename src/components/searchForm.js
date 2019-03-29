import React, { Component } from 'react';
// import API from '../helpers/API'


class SearchForm extends Component {
    state = {
        departure: "",
        arrival: ""
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = (event, departure, arrival, cb = this.props.updateState) => {
        event.preventDefault()
        cb(departure, arrival)
    }

    render(){
        return(
            <div className="searchForm-container">
                <form className="searchForm">
                    <input type="text" name="departure" placeholder="departure" className="input-style" onChange={this.handleOnChange}/>
                    <input type="text" name="arrival" placeholder="arrival" className="input-style" onChange={this.handleOnChange}/>
                    <button type="submit" onClick={(event) => this.handleSubmit(event, this.state.departure, this.state.arrival)}>Search</button>
                </form>

            </div>
        )
    }
}

export default SearchForm;