import React from 'react';
import { ResetStyles } from './constants/reset';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './containers/app/app-routes';
import { AppStyle } from './app-style';
import Fonts from './assets/fonts/fonts';
import { Heading2Text } from './typography/typography';
import { Provider } from 'react-redux';
import store from './store/index';
import {
  getCurrentUser,
  getPlaylistsByTag,
  getTopPlaylists,
  getTopTracks,
} from './store/actionCreators';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../src/assets/icons/files/logo-name.png';

store.dispatch(getTopTracks());
store.dispatch(getTopPlaylists());
store.dispatch(getPlaylistsByTag());
store.dispatch(getCurrentUser());

const App = () => {
  return (
    <Provider store={store}>
      <AppStyle>
        <ResetStyles />
        <Fonts />
        <ToastContainer autoClose={2000} />
        <div className="app-logo">
          <img src={logo} alt="" />
        </div>
        <Router>
          <AppRoutes />
        </Router>
      </AppStyle>
    </Provider>
  );
};

export default App;
