import React, {Component} from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import {useNavigate, useParams} from 'react-router-dom'
import Row from '../row';
const PeoplePage = () =>  {
    let navigate = useNavigate()
    let { id } = useParams() 
    return (
        <Row 
        left={ <PersonList onItemSelected={(itemId) => {
            navigate(`/people/${itemId}`)
        }}/>}
        right={ <PersonDetails itemId={id} />}
        />  
    );
}
export default PeoplePage

