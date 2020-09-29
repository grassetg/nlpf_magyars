import React, { useEffect, useState } from 'react';

import Home from './Home';
import Collab from './Collab';
import {BrowserRouter,Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/sheet" component={Collab} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
