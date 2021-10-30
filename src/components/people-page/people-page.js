import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import {ItemDetails} from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry"

import './people-page.css'


export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3
    }



    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
      }
  
      render() {
        const itemList = (
          <ItemList 
            onItemSelecter={this.onPersonSelected}
            getData={this.swapiService.getAllPeople} >
            {(i) => (
              `${i.name} (${i.birthYear})`
            )}
        </ItemList>
        )
        const personDetails = (
          <ItemDetails personId={this.state.selectedPerson}/>
        )

        if (this.state.hasError) {
              return <ErrorIndicator />
        }
        return (
          <ErrorBoundry>
            <Row leftBlock={itemList} rightBlock={personDetails} />
          </ErrorBoundry>
        )
        
      }
}