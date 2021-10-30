import React, { Component } from 'react';

import './item-details.css';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};




const ItemDetails = (props) =>  {
    const {item, image, Parametrs} = props
  
 
    
    return (      
      <div className="item-details card">
          
          <img className="item-image"
              src={image} alt="character"/>
             
            <div className="card-body">
              <h4>{item.name}</h4>
              <ul className="list-group list-group-flush">
                     {Parametrs}
                      
              </ul>
            </div> 
       </div>
    )
  }



  export {ItemDetails, Record}
  

