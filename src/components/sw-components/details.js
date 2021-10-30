import React from 'react';
import {ItemDetails} from '../item-details/item-details';

import SwapiService from '../../services/swapi-service';
import withDetails from '../hoc-helpers/with-details';

const swapiService = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService

const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage)

const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage)

const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage)

export {PersonDetails, PlanetDetails, StarshipDetails}