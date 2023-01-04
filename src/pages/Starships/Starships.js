import React, { useEffect, useState } from 'react'
import SwapiService from './../../services/swapi-service';

const Starships = () => {
  const [cards, setCards] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const swapi = new SwapiService()
  
  useEffect(() => {
    swapi.getAllStarships()
    .then(res => {
      setCards(res)
      setIsLoaded('...loading')
    })
    .catch(err => console.error(err))
  }, [])

  let i = 0;
  const checkImgSrc = src => {
    const img = new Image();
    img.onload = function () { console.log(`valid src: ${src}`); 
    i = 1}
    img.onerror = function () { console.log(`unvalid src: ${src}`); 
    i = 2}
    img.src = src;
  }
  
  if(!isLoaded){
    return  (
      <div>Loading . .</div>
    )
  }else if(error){
    return (
      <div>{error.messege}</div>
    )
  }else 
  return (
    <div className='row'>
      {
        cards.map(item => {
          checkImgSrc(`https://starwars-visualguide.com/assets/img/starships/${item.id}.jpg`)
          return (
          <div className='planetCard' key={item.id}>
            <div className='forHeight'><img src={`https://starwars-visualguide.com/assets/img/starships/${item.id}.jpg`} alt='Loading . .' width='277' /></div>
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
        )})
      }
    </div>
  )
}

export default Starships
