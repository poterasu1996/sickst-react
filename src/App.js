import './App.scss';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import SubscriptionsWomen from './pages/SubscriptionsWomen';
import SubscriptionsMen from './pages/SubscriptionsMen';
import { AuthProvider } from './contexts/AuthContext';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/subscriptions/women" exact>
        <SubscriptionsWomen />
      </Route>
      <Route path="/subscriptions/men" exact>
        <SubscriptionsMen />
      </Route>
    </Fragment>
  );
}

export default App;
