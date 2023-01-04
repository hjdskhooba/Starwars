import React from 'react'
import PersonDetails from './person-details/Person-details';
import RandomPlanet from './random-planet/Random-planet'
import ItemList from './item-list/Item-list';

const Home = ({idea, setIdea}) => {
  return (
    <>
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList setIdea={setIdea}/>
          </div>
          <div className="col-md-6">
            <PersonDetails idea={idea}/>
          </div>
        </div>
    </>
  )
}

export default Home