import React from 'react';
import { ModalAddTrackStyle } from './modal-add-track-style';
import { useDispatch, useSelector } from 'react-redux';
import { BodyDefaultText } from '../../typography/typography';
import { updatePlaylist } from '../../store/actionCreators';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ModalAddTrack = ({ track, onClose }) => {
  const { playlists } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const addTracktoPlaylist = (playlist) => {
    if (playlist.tracks.some(({ id }) => id === track.id)) {
      return toast.error('Song already added to playlist');
    }

    let trackList = playlist.tracks;

    trackList.push({
      id: track.id,
      album: track.album,
      artist: track.artist,
      image: track.image,
      link: track.link,
      name: track.name,
    });

    dispatch(
      updatePlaylist({
        id: playlist._id,
        name: playlist.name,
        description: playlist.description,
        tracks: trackList,
      })
    );
    onClose();
  };

  return (
    <ModalAddTrackStyle>
      {playlists.length !== 0 ? (
        playlists.map((playlist, index) => (
          <div
            className="modal-add-track-item"
            key={`modal-add-track-item__${index}`}
            onClick={() => addTracktoPlaylist(playlist)}
          >
            <BodyDefaultText>{playlist.name}</BodyDefaultText>
          </div>
        ))
      ) : (
        <Link to="/create-playlist">
          You don't have any playlists yet. Create one now!
        </Link>
      )}
    </ModalAddTrackStyle>
  );
};

export default ModalAddTrack;
