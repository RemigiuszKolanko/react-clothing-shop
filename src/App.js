import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route path="/shop" component={ShopPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
