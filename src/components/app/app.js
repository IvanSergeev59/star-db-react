import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import PeoplePage from '../people-page/people-page';
import RandomPlanet from '../random-planet';
import Row from '../row';
import { PersonDetails, PlanetDetails, StarshipDetails, PersonList, PlanetList, StarshipList } from '../sw-components';
import { Record } from '../item-details';

import './app.css';
import SwapiService from '../../services/swapi-service';



export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true    
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :  null;

    const {getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets} = this.swapiService


    console.log(PersonDetails)
   


    return (
      <ErrorBoundry>
      <div className="stardb-app">
        <Header />

         <PlanetList>
          { ({name}) => <span>{name}</span> }
        </PlanetList>

        <StarshipList>
          { ({name}) => <span>{name}</span> }
        </StarshipList>

        <PersonList>
          { ({name}) => <span>{name}</span> }
        </PersonList> 

        <PersonDetails id={2} >
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" /> 
        </PersonDetails>

        <PlanetDetails id={4} >
              <Record field="population" label="Population" />
              <Record field="rotation_period" label="Rotation Period" /> 
              <Record field="diameter" label="Diameter" /> 
        </PlanetDetails>

        <StarshipDetails id={9} >
              <Record field="model" label="Model" />
              <Record field="length" label="Length" /> 
              <Record field="cost_in_credits" label="Cost" /> 
        </StarshipDetails>

      </div>
    </ErrorBoundry>
    );
  }
}


