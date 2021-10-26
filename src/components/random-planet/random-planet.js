
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator/error-indicator';

import Spinner from '../spinner/spinner';
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state= {
    planet: {},
    loading: true
  }

  constructor () {
    super();

    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 15000)
  }
  onPlanetLoaded = (planet) => {
    this.setState ({
      planet,
      loading: false,
      error: false
    })

  }

  onError = (err) => {
    this.setState({      
      error: true,
      loading: false
    })

  }

  updatePlanet  = ()  => {
    const id = Math.floor(Math.random()*19);
    this.swapiService
    .getPlanet(id)
      .then(this.onPlanetLoaded)  
      .catch(this.onError)      
    }

   


  render() {
    const {planet, loading, error} = this.state

    const hasData = !(loading || error)

    const errorDisplay = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = hasData ? <PlanetLoading planet={planet} /> : null
    
    return (     
      <div className="random-planet jumbotron rounded">      
        {spinner}  
        {content}  
        {errorDisplay}   
      </div>   
    )
  }
}

const PlanetLoading = ({planet}) => {
  const {id, population, rotation, diameter, name} = planet
   return (
      <React.Fragment>
        <img className="planet-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
          <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population: </span>
                <span> {population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period: </span>
                <span> {rotation}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter: </span>
                <span> {diameter}</span>
              </li>
            </ul>
          </div>
        </React.Fragment>
    )
  }
      
