import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  GET_TOP_TRACKS,
  GET_TOP_PLAYLISTS,
  GET_PLAYLISTS_BY_TAG,
  GET_TRACKS,
  ADD_TO_PLAYER,
  GET_CURRENT_USER,
  LOG_IN,
  LOG_OUT,
  REGISTER,
  CREATE_PLAYLIST,
  FOLLOW_PLAYLIST,
  DELETE_PLAYLIST,
  UPDATE_USER,
  DELETE_USER,
} from './actions';

const initialLists = {
  topTracks: [],
  topPlaylists: [],
  playlistsByTag: [],
  tracks: [],
};

const initialPlayer = {
  id: '',
  name: '',
  list: [],
};

const initialUser = {
  name: '',
  email: '',
  playlists: [],
  following: [],
  token: '',
};

const listsReducer = (state = initialLists, action) => {
  switch (action.type) {
    case GET_TOP_TRACKS:
      return { ...state, topTracks: action.topTracks };
    case GET_TOP_PLAYLISTS:
      return { ...state, topPlaylists: action.topPlaylists };
    case GET_PLAYLISTS_BY_TAG:
      return { ...state, playlistsByTag: action.playlistsByTag };
    case GET_TRACKS:
      return { ...state, tracks: action.tracks };
    default:
      return state;
  }
};

const playerReducer = (state = initialPlayer, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        id: action.player.id,
        name: action.player.name,
        list: action.player.list,
      };
    default:
      return state;
  }
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        playlists: action.user.playlists,
        following: action.user.following,
        token: action.token,
      };
    case UPDATE_USER:
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
      };
    case DELETE_USER:
      return {
        ...state,
        name: '',
        email: '',
        playlists: [],
        following: [],
        token: '',
      };
    case LOG_IN:
      return {
        ...state,
        token: action.token,
      };
    case LOG_OUT:
      return {
        ...state,
        name: '',
        email: '',
        playlists: [],
        following: [],
        token: '',
      };
    case REGISTER:
      return state;
    case CREATE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.concat(action.input),
      };
    case FOLLOW_PLAYLIST:
      if (state.following.some((id) => id === action.id)) {
        return {
          ...state,
          following: state.following.filter((id) => id !== action.id),
        };
      } else {
        return { ...state, following: state.following.concat(action.id) };
      }
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(({ _id }) => _id !== action.id),
      };
    default:
      return state;
  }
};

export default createStore(
  combineReducers({ listsReducer, playerReducer, userReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
