import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route path="/shop/hats">
        <HatsPage />
      </Route>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
