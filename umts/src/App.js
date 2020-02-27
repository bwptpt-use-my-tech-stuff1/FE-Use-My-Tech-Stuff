import React from 'react';
import { Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={WelcomePage} />
    </div>
  );
}

export default App;
