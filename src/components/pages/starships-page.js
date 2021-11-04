import React from "react";
import {useNavigate} from 'react-router-dom'

import {    
    StarshipList
  } from '../sw-components';


const StarshipsPage = (history) => {
    let navigate = useNavigate()
    console.log(navigate)
    return (
        <StarshipList
            onItemSelected={(itemId) => {
                navigate(`/starships/${itemId}`)
            }}/>            
    );
    
};

export default StarshipsPage