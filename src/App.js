import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Starships from './pages/Starships/Starships';
import Planets from './pages/Planets/Planets';
import People from './pages/People/People';
import Home from './pages/Home/Home';
import Loyout from './Loyout/Loyout';
import Faq from './pages/FAQ/Faq';
import './i18n';


const App = () => {
  const [idea, setIdea] = useState(1)
  return (
    <Suspense fallback='Loading . . .'>
      <Routes>

      <Route path='/' element={<Loyout/>}>
        <Route path='' element={<Home idea={idea} setIdea={setIdea}/>}/>
        <Route path='/starships' element={<Starships/>}/>
        <Route path='/planets' element={<Planets/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/faq' element={<Faq/>}/>
      </Route>

    </Routes>
    </Suspense>
  );
};

export default App;