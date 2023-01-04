import React, { useEffect, useState } from 'react';
import './person-details.css';
import SwapiService from './../../../services/swapi-service';

const PersonDetails = ({idea}) => {
  const [state, setState] = useState({data: {}})
  const swapi = new SwapiService()
  
  const updatePerson = (idea) => {
    swapi.getPerson(idea)
    .then(data => {
      setState({data: data})
    })
  }

  useEffect(()=>{
    updatePerson(idea)
  }, [idea])
  
  const {id, name, gender, birthYear, eyeColor} = state.data;
    return (
      <div className="person-details card">
        <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default PersonDetails