
import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service.js'

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state= {
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
    this.swapiService
    .getPlanet(7)
      .then((planet) => {
        this.setState ({         
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

    const {population, rotation, diameter, name} = this.state

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
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