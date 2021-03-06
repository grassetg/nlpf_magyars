import React, { useEffect, useState } from 'react';

import Home from './Home';
import Collab from './Collab';
import {BrowserRouter,Route} from 'react-router-dom';
import "./App.css";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/sheet/:pid/v/:vid" component={Collab} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
