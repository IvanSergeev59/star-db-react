import React, { Component } from 'react';


import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from '../pages';
import SwapiService from '../../services/swapi-service';


import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';


import './app.css';

import { BrowserRouter as Router ,Routes, Route, useParams, useNavigate} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


export default class App extends Component { 

  state = {
    showRandomPlanet: true, 
    swapiService : new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

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
    const StashipRoute = () => {       
      let { id } = useParams() 
      const navigate = useNavigate();
                    
      return < StarshipDetails itemId={id} navigate={navigate}/>
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>

              <RandomPlanet />
              <Routes>
            
                <Route path="/people/:id" element={<PeoplePage />} />       
                <Route path="/people/" element={<PeoplePage />} />          
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} />    
                <Route path="/starships/:id" element={<StashipRoute />} />

                <Route path="/login" element={<LoginPage isLoggedIn={false} onLogin={this.onLogin}/>}></Route>

                <Route path="/secret" element={<SecretPage isLoggedIn={this.state.isLoggedIn}/>}></Route>

              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
