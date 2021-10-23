
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service.js'

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state= {
    id: null,
    name: null,
    population: null,
    rotation: null,
    diameter: null
  }

  constructor () {
    super();

    this.updatePlanet()
  }

  updatePlanet () {
    const id = Math.floor(Math.random()*19);
    this.swapiService
    .getPlanet(id)
      .then((planet) => {
       
        this.setState ({  
          id,       
          name: planet.name,
          population: planet.population,
          rotation: planet.rotation_period,
          diameter:planet.diameter
        })
        })
      .catch((err) => {
        console.log(err)
      })
    }


  render() {

    const {id, population, rotation, diameter, name} = this.state

    return (
      <div className="random-planet jumbotron rounded">
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
      </div>

    );
  }
}