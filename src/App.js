import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import SubscriptionsWomen from './pages/SubscriptionsWomen';
import SubscriptionsMen from './pages/SubscriptionsMen';
import Header from './components/header/Header';
import { useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== '/register' && location.pathname !== '/register/login' && <Header />}
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/register/login" component={LoginPage}/>
          <Route exact path="/subscriptions-women" component={SubscriptionsWomen}/>
          <Route exact path="/subscriptions-men" component={SubscriptionsMen}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
