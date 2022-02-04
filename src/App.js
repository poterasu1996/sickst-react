import './App.scss';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Welcome from './pages/Welcome'
import Products from './pages/Products'

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
