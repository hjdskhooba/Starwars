import React, { useEffect, useState } from 'react'
import SwapiService from '../../services/swapi-service';

const People = () => {
  const [cards, setCards] = useState([])
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const swapi = new SwapiService()

  useEffect(()=>{
    swapi.getAllPeople()
    .then(res => {
      setIsLoaded(true);
      setCards(res)
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
    )
  }, [])
  
  if(error) {
    return (
      <div>Error: {error.message}</div>
    )
  }else if(!isLoaded){
    return (
      <div>Loading . .</div>
    )
  }else {    
    return (
      <div className='row'>
        {
          cards.map(item => (
            <div className='card' key={item.id}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`} width='277px' alt='characters'/>
              <h4>Name: {item.name}</h4>
              <p>Gender: {item.gender}</p>
              <p>Birth Year: {item.birthYear}</p>
              <p>Eye Color: {item.eyeColor}</p>
              <p>Hair Color: {item.hairColor}</p>
              <p>Height: {item.height}</p>
              <p>Mass: {item.mass}</p>
              <p>Skin Color {item.skin_color}</p>
              <p>Created: {item.created}</p>
              <p>Edited: {item.edited}</p>
            </div>
          ))
        }
      </div>
    )
  }

}

export default People