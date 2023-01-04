import React, { useEffect, useState } from 'react';
import './item-list.css'
import SwapiService from '../../../services/swapi-service';

const ItemList = ({setIdea}) => {
  const [state, setState] = useState({data: []})
  
  useEffect(() => {
    const swapi = new SwapiService()
    swapi.getAllPeople()
    .then(data => {
      setState({data: data})
    })
  }, [])

  const content = state.data.map(item => {
      // console.log(1)
      return (<li onClick={()=>setIdea(item.id)} key={item.id} className="list-group-item">{item.name}</li>)
  })
  
  return(
  <ul className="item-list list-group">
    {content}
  </ul>
  )
}

export default ItemList