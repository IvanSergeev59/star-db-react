import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './people-page.css'

const Row = ({leftBlock, rightBlock}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {leftBlock}  
      </div>
      <div className="col-md-6">
        {rightBlock}
      </div>
    </div>
  )
}

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger


        this.setState ({
            hasError: true
        })
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
            getData={this.swapiService.getAllPeople} 
            renderItem={({name, gender, birthYear}) => (
            `${name} (${gender}, ${birthYear})`)} />
        )

        const personDetails = (
          <PersonDetails personId={this.state.selectedPerson}/>
        )

        if (this.state.hasError) {
              return <ErrorIndicator />
        }
        return (
          <Row leftBlock={itemList} rightBlock={personDetails} />
        )
        
      }
}