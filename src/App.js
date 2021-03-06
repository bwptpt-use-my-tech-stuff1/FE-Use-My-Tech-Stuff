import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/authentication/PrivateRoute';
import WelcomePage from './components/WelcomePage';
import SignUpForm from './components/authentication/SignUpForm';
import Login from './components/authentication/Login';
import Dashboard from './components/Dashboard';
import ProductRent from './components/ProductRent';
import AddListing from './components/AddListing';
import Profile from './components/Profile';
import OwnerListing from './components/OwnerListing';
import EditListing from './components/EditListing';

import UserState from './contexts/user/UserState';
import TechState from './contexts/tech/TechState';

import './App.css';

function App() {
  return (
    <UserState>
      <TechState>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/sign_up' component={SignUpForm} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/rentals/:id' component={ProductRent} />
            <PrivateRoute path='/add-item' component={AddListing} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/my_listings' component={OwnerListing} />
            <PrivateRoute path='/edit-item' component={EditListing} />
          </Switch>
        </div>
      </TechState>
    </UserState>
  );
}

export default App;
