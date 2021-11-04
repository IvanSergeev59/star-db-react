import React, { Component } from 'react';


import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import SwapiService from '../../services/swapi-service';


import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';


import './app.css';

import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';


export default class App extends Component { 

  state = {
    showRandomPlanet: true, 
    swapiService : new SwapiService()
  };

  onServiceChange = () => {
   
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? 
      DummySwapiService : SwapiService
      
      return {
        swapiService: new Service()
      }
    })
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>

              <RandomPlanet />
              <Routes>
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} />    
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
