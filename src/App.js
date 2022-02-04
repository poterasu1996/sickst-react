import './App.scss';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Fragment>
  );
}

export default App;
