import React, { Component } from 'react';
import './App.css';
import API from './helpers/API'
import FlightResultCard from './components/flightResultCard'
import SearchForm from './components/searchForm'

class App extends Component {
  state ={
    results: null,
    parsedResults: null
  }
  
  updateState = (departure, arrival) => {
    API.retrieveFlights(departure, arrival)
    .then(results => this.setState({results}))
    .then(() => this.getOfferFlightsInfo())
  }

  componentDidMount(){
  }

  getOfferFlightsInfo = (offers = this.state.results.offers, flights = this.state.results.flights) => {
    let parsedFlight = {}
    let arrayOfFlights = []
    offers.forEach(offer => {
      parsedFlight.offerId = offer.offerId
      parsedFlight.price = offer.totalPrice
      parsedFlight.flightTo = flights.find(flight => offer.journeys[0].flightIds[0] === flight.id)
      parsedFlight.flightFrom = flights.find(flight => offer.journeys[1].flightIds[0] === flight.id)
      // debugger
      arrayOfFlights.push(parsedFlight)
      parsedFlight = {}
    })
      this.setState({
        parsedResults: arrayOfFlights
      })
  }

  generateResultCards = (parsedResults) => {
    return parsedResults.map(result => <FlightResultCard flight={result} dateTime={this.convertToDateTime} journeyLength={this.convertDateToTime} key={result.offerId}/>)
  }

  convertToDateTime = (date,time) => {
    const dateTime = new Date(date +"T"+ time + "Z")
    return dateTime
  }

  convertDateToTime = (dateTime) => {
    dateTime = (dateTime/1000)/60
    const minutes = dateTime % 60
    const hours = (dateTime - minutes) / 60
    
    return hours+"h "+ minutes+"m"
  }

  render() {
    return (
      <div className="App">
        <SearchForm updateState={this.updateState}/>
        {this.state.parsedResults !== null ? this.generateResultCards(this.state.parsedResults) : null}
      </div>
    );
  }
}

export default App;
