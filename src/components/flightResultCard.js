import React, { Component } from 'react';

class FlightResultCard extends Component {

  render() {
      const flight = this.props.flight
      const flightFrom = flight.flightFrom.flightSegments
      const flightTo = flight.flightTo.flightSegments
      const renderMultiLegs = (givenLeg) => {
        return givenLeg.map( leg => 
            <div className="result-card-flightInfo-block" key={leg.id}>
                <p>{leg.operatingCarrier.name}</p>
                <div className="result-card-flightInfo-depart">
                    <p>{leg.departure.time}</p>
                    <p>{leg.departure.airportCode}</p>
                </div>
                <p> - </p>
                <div className="result-card-flightInfo-arrival">
                    <p>{leg.arrival.time}</p>
                    <p>{leg.arrival.airportCode}</p>
                </div>
                <p className="journey-length">{leg.flightDuration <= 0 ? 
                    this.props.journeyLength(this.props.dateTime(leg.arrival.date, leg.arrival.time)-this.props.dateTime(leg.departure.date, leg.departure.time)) 
                    : 
                    this.props.journeyLength((leg.flightDuration*60)*1000) 
                }</p>
            </div>
        ) 
      }
    return (
      <div className="result-container">
        <div className="result-card">
            <div className="result-card-flightInfo">
                {renderMultiLegs(flightTo)}
                {renderMultiLegs(flightFrom)}
            </div>
            <div className="result-card-flightPrice">
                <p>{flight.price.amount} {flight.price.currencyCode}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default FlightResultCard;
