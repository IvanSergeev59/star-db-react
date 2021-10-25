
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service.js'

import Spinner from '../spinner/spinner.js';
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
  }
  onPlanetLoaded = (planet) => {
    this.setState ({
      planet,
      loading:false
    })

  }

  updatePlanet () {
    const id = Math.floor(Math.random()*19);
    this.swapiService
    .getPlanet(id)
      .then(this.onPlanetLoaded)        
    }

   


  render() {
    const {planet, loading} = this.state
    return (
     
      <div className="random-planet jumbotron rounded">        
        <PlanetLoading planet={planet} loading={loading}/>      
      </div>   
    )
  }
}

const PlanetLoading = ({planet, loading}) => {
  const {id, population, rotation, diameter, name} = planet
  if (loading) {
    return (
      <Spinner />
    )
  }
  else {
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
      
}