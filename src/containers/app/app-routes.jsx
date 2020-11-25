import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoutesStyle } from './app-routes-style';
import CreatePlaylist from './app/create-playlist/create-playlist';
import Error from './app/error/error';
import Home from './app/home/home';
import Player from './app/player/player';
import Profile from './app/profile/profile';
import UpdatePlaylist from './app/update-playlist/update-playlist';
import Login from './auth/login/login';
import Register from './auth/register/register';

const AppRoutes = () => {
  return (
    <AppRoutesStyle>
      <Header />
      <div className="app-routes-container">
        <Switch>
          <Route path="/404" component={Error} />
          <Route path="/player" component={Player} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create-playlist" component={CreatePlaylist} />
          <Route path="/update-playlist/:id" component={UpdatePlaylist} />
          <Route path="/" exact component={Home} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </AppRoutesStyle>
  );
};

export default AppRoutes;
