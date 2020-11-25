import React, { useState, useEffect } from 'react';
import { ProfileStyle } from './profile-style';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { napsterConfig } from '../../../../config';
import { ReactComponent as SettingsIcon } from '../../../../assets/icons/files/settings.svg';
import Modal from '../../../../components/modal/modal';
import ModalUpdateUser from '../../../../components/modal-update-user/modal-update-user';
import { useSelector, useDispatch } from 'react-redux';
import { addToPlayer, logOut } from '../../../../store/actionCreators';
import { BodyDefaultText } from '../../../../typography/typography';
import getTracksFromPlaylist from '../../../../utils/get-tracks-from-playlist';

const Profile = () => {
  const history = useHistory();
  const [following, setFollowing] = useState([]);
  const [modal, setModal] = useState('');
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const getPlaylistsFollowing = () => {
    let strPlaylists = '';
    user.following.map((id) => (strPlaylists += `${id},`));
    strPlaylists = strPlaylists.slice(0, -1);
    axios
      .get(
        `${napsterConfig.url}/v2.2/playlists/${strPlaylists}?apikey=${napsterConfig.apikey}`
      )
      .then(({ data }) => handleResponse(data))
      .catch((e) => console.log('An error occurred.'));
  };

  const handleResponse = (data) => {
    let newFollowing = [];
    data.playlists.map((playlist) => {
      newFollowing.push({
        id: playlist.id,
        name: playlist.name,
        image: playlist.images[0].url,
        tracks: playlist.links.tracks.href,
      });
    });

    setFollowing(newFollowing);
  };

  const addFollowingToPlayer = async (playlist) => {
    const tracks = await getTracksFromPlaylist(playlist.id);

    dispatch(addToPlayer(playlist.id, playlist.name, tracks));
    history.push('/player');
  };

  useEffect(() => {
    if (!user.token) history.push('/login');
    if (user.following) getPlaylistsFollowing();
  }, [user, history]);

  return (
    <ProfileStyle>
      <div className="profile-info">
        <div className="profile-info-details">
          <div className="profile-info-details__name">
            <h2>Hi, {user.name}!</h2>
          </div>
          <div className="profile-info-details__email">
            <h2>{user.email}</h2>
          </div>
          <div className="profile-info-details__logout">
            <button onClick={handleLogout}>Log out</button>
          </div>
        </div>
        <div className="profile-info-settings">
          <div
            className="profile-info-settings__icon"
            onClick={() => setModal('settings')}
          >
            <SettingsIcon />
          </div>
        </div>
      </div>
      <div className="profile-category-title">
        <h2>My Playlists</h2>
        <span>({user.playlists.length})</span>
        <button onClick={() => history.push('/create-playlist')}>
          Create playlist
        </button>
      </div>
      <div className="profile-category">
        {user.playlists ? (
          user.playlists.map((playlist, index) => (
            <div
              className="profile-category-item"
              key={playlist._id}
              onClick={() => {
                dispatch(
                  addToPlayer(playlist._id, playlist.name, playlist.tracks)
                );
                history.push('/player');
              }}
            >
              <div className="profile-category-item__name">
                <BodyDefaultText>{playlist.name}</BodyDefaultText>
              </div>

              <div className="profile-category-item__cover" />
            </div>
          ))
        ) : (
          <Link to="/create-playlist">
            <BodyDefaultText>
              No playlists created yet. Create one!
            </BodyDefaultText>
          </Link>
        )}
      </div>
      <div className="profile-category-title">
        <h2>Playlists following</h2>
        <span>({following && following.length})</span>
      </div>
      <div className="profile-category">
        {following.length !== 0 &&
          following.map((playlist) => (
            <div
              className="profile-category-item following"
              key={playlist.id}
              onClick={() => addFollowingToPlayer(playlist)}
            >
              <div className="profile-category-item__name">
                <span>{playlist.name}</span>
              </div>
              <img
                className="profile-category-item__cover"
                src={playlist.image}
                alt="track"
              />
            </div>
          ))}
      </div>
      <Modal
        title="Edit user"
        active={modal === 'settings' && 'active'}
        onClose={() => setModal('')}
      >
        <ModalUpdateUser onClose={() => setModal('')} />
      </Modal>
    </ProfileStyle>
  );
};

export default Profile;
