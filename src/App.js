import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import SubscriptionsWomen from './pages/SubscriptionsWomen';
import SubscriptionsMen from './pages/SubscriptionsMen';
import Header from './components/header/Header';
import { useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import { Redirect } from 'react-router-dom';

function App() {
  let location = useLocation();
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    console.log("e logat - app")
  }

  return (
    <>
      {location.pathname !== '/register' && location.pathname !== '/register/login' && <Header />}
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register">
            {!authCtx.isLoggedIn && <RegisterPage />}
            {authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route exact path="/register/login">
            {!authCtx.isLoggedIn && <LoginPage /> }
            {authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route exact path="/subscriptions-women" component={SubscriptionsWomen}/>
          <Route exact path="/subscriptions-men" component={SubscriptionsMen}/>
          <Route exact path="/account" >
            {authCtx.isLoggedIn && <Account />}
            {!authCtx.isLoggedIn && <Redirect to="/register/login" />}
          </Route>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
