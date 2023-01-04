import React, { useEffect, useState } from 'react'
import SwapiService from './../../services/swapi-service';

const Planets = () => {
  const [cards, setCards] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const swapi = new SwapiService()
  
  useEffect(() => {
    swapi.getAllPlanets()
    .then(res => {
      setCards(res)
      setIsLoaded(true)
    },
    (error => {
      setIsLoaded(true)
      setError(error)
    })
    )
  }, [])

  if(!isLoaded){
    return (<div className='Loading'>Loading . .</div>)
  }else if(error){
    return (
      <div className='errorMes'>{error.messege}</div>
    )
  }else {
    return (
      <div className='row'>
        {
          cards.map(item => (
            <div className='planetCard' key={item.id}>
              <img src={`https://starwars-visualguide.com/assets/img/planets/${item.id}.jpg`} alt='planetImg' width='277' />
              <h4>Name: {item.name}</h4>
              <p>Population: {item.population}</p>
              <p>Rotation period: {item.rotationPeriod}</p>
              <p>Orbital period: {item.orbital_period}</p>
              <p>Diameter: {item.diameter}</p>
              <p>Climate: {item.climate}</p>
              <p>Graviti: {item.gravity}</p>
              <p>Terrain: {item.terrain}</p>
              <p>Surface water: {item.surface_water}</p>
              <p>Crarted: {item.created}</p>
              <p>Edited: {item.edited}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Planets