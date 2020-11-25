import axios from 'axios';
import { config, napsterConfig } from '../config';
import {
  GET_TOP_TRACKS,
  GET_TOP_PLAYLISTS,
  GET_PLAYLISTS_BY_TAG,
  GET_TRACKS,
  ADD_TO_PLAYER,
  GET_CURRENT_USER,
  UPDATE_USER,
  DELETE_USER,
  LOG_IN,
  LOG_OUT,
  REGISTER,
  CREATE_PLAYLIST,
  UPDATE_PLAYLIST,
  DELETE_PLAYLIST,
  FOLLOW_PLAYLIST,
} from './actions';
import { toast } from 'react-toastify';

const getTopTracks = () => (dispatch) => {
  axios
    .get(napsterConfig.url + '/v2.2/tracks/top?apikey=' + napsterConfig.apikey)
    .then((res) => {
      let list = [];
      res.data.tracks.map((track) =>
        list.push({
          id: track.id,
          name: track.name,
          artist: track.artistName,
          album: track.albumName,
          image: `${napsterConfig.img.url}/${track.albumId}/images/400x400.jpg`,
          link: track.previewURL,
        })
      );
      return dispatch({
        type: GET_TOP_TRACKS,
        topTracks: list,
      });
    })
    .catch((e) => console.error('An error occurred.'));
};
const getTopPlaylists = () => (dispatch) => {
  axios
    .get(
      napsterConfig.url + '/v2.2/playlists/top?apikey=' + napsterConfig.apikey
    )
    .then((res) => {
      let list = [];
      res.data.playlists.map((playlist) =>
        list.push({
          id: playlist.id,
          name: playlist.name,
          image: playlist.images[0].url,
        })
      );
      return dispatch({
        type: GET_TOP_PLAYLISTS,
        topPlaylists: list,
      });
    })
    .catch((e) => console.error('An error occurred.'));
};
const getPlaylistsByTag = () => (dispatch) => {
  axios
    .get(
      napsterConfig.url +
        '/v2.2/tags/tag.152196523/playlists?apikey=' +
        napsterConfig.apikey
    )
    .then((res) => {
      let list = [];
      res.data.playlists.map((playlist) =>
        list.push({
          id: playlist.id,
          name: playlist.name,
          image: playlist.images[0].url,
        })
      );
      return dispatch({
        type: GET_PLAYLISTS_BY_TAG,
        playlistsByTag: list,
      });
    })
    .catch((e) => console.error('An error occurred.'));
};

const getTracks = (search) => (dispatch) => {
  axios
    .get(
      napsterConfig.url +
        '/v2.2/search?apikey=' +
        napsterConfig.apikey +
        '&query=' +
        search +
        '&type=track'
    )
    .then((res) => {
      let list = [];
      res.data.search.data.tracks.map((track) =>
        list.push({
          id: track.id,
          name: track.name,
          artist: track.artistName,
          album: track.albumName,
          image: `${napsterConfig.img.url}/${track.albumId}/images/400x400.jpg`,
          link: track.previewURL,
        })
      );
      return dispatch({
        type: GET_TRACKS,
        tracks: list,
      });
    })
    .catch((e) => console.error('An error occurred.'));
};

const addToPlayer = (id, name, list) => ({
  type: ADD_TO_PLAYER,
  player: {
    id,
    name,
    list,
  },
});

const logIn = (input) => (dispatch) => {
  axios
    .post(`${config.url}/auth/`, {
      email: input.email,
      password: input.password,
    })
    .then((res) => {
      localStorage.setItem('token', res.data);
      toast.success(`You're logged in!`);
      dispatch(getCurrentUser());

      return dispatch({
        type: LOG_IN,
        token: res.data,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};

const logOut = () => {
  localStorage.removeItem('token');
  toast.info(`You're logged out`);
  return {
    type: LOG_OUT,
  };
};

const getCurrentUser = () => (dispatch) => {
  axios
    .get(`${config.url}/users/me`, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })
    .then((res) => {
      return dispatch({
        type: GET_CURRENT_USER,
        user: res.data,
        token: localStorage.getItem('token'),
      });
    })
    .catch(function (error) {
      if (error.response) {
        console.error(`Error: ${error.response.data}`);
      }
    });
};

const updateUser = (input) => (dispatch) => {
  axios
    .put(
      `${config.url}/users/`,
      {
        name: input.name,
        email: input.email,
        password: input.password,
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      toast.info('User edited');
      dispatch(getCurrentUser());
      return dispatch({
        type: UPDATE_USER,
        user: input,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};

const deleteUser = () => (dispatch) => {
  axios
    .delete(`${config.url}/users/`, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })
    .then((res) => {
      localStorage.removeItem('token');
      toast.info('User deleted');
      return dispatch({
        type: DELETE_USER,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};

const register = (input) => (dispatch) => {
  axios
    .post(`${config.url}/users/`, {
      name: input.name,
      email: input.email,
      password: input.password,
    })
    .then((res) => {
      toast.success('You registered successfully!');
      dispatch(logIn(input));
      return dispatch({
        type: REGISTER,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};

const createPlaylist = (input) => (dispatch) => {
  axios
    .post(
      `${config.url}/playlists/`,
      {
        name: input.name,
        description: input.description,
        tracks: input.tracks,
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      dispatch(getCurrentUser());
      toast.success('Playlist created!');
      return dispatch({
        type: CREATE_PLAYLIST,
        input,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};

const updatePlaylist = (input) => (dispatch) => {
  axios
    .put(
      `${config.url}/playlists/${input.id}`,
      {
        name: input.name,
        description: input.description,
        tracks: input.tracks,
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      dispatch(getCurrentUser());
      toast.success('Playlist updated!');
      return dispatch({
        type: UPDATE_PLAYLIST,
        playlist: input,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};
const deletePlaylist = (id) => (dispatch) => {
  axios
    .delete(`${config.url}/playlists/${id}`, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })
    .then((res) => {
      dispatch(getCurrentUser());
      toast.info('Playlist deleted');
      return dispatch({
        type: DELETE_PLAYLIST,
        playlist: id,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};

const followPlaylist = (id) => (dispatch) => {
  axios
    .post(
      `${config.url}/follows/`,
      { playlistId: id },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      return dispatch({
        type: FOLLOW_PLAYLIST,
        id,
      });
    })
    .catch(function (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data}`);
      }
    });
};

export {
  getTopTracks,
  getTopPlaylists,
  getPlaylistsByTag,
  getTracks,
  addToPlayer,
  getCurrentUser,
  updateUser,
  deleteUser,
  logIn,
  logOut,
  register,
  createPlaylist,
  updatePlaylist,
  followPlaylist,
  deletePlaylist,
};
