import React, { useState, useEffect } from 'react';
import { UpdatePlaylistStyle } from './update-playlist-style';
import svgSearch from '../../../../assets/icons/files/search.svg';
import svgClose from '../../../../assets/icons/files/close.svg';
import { useHistory, useParams } from 'react-router-dom';
import {
  BodyDefaultText,
  Heading2Text,
} from '../../../../typography/typography';
import Input from '../../../../components/input/input';
import { useSelector, useDispatch } from 'react-redux';
import {
  updatePlaylist,
  getTracks,
  deletePlaylist,
} from '../../../../store/actionCreators';

const UpdatePlaylist = ({ onClick, onClose }) => {
  const [search, setSearch] = useState({ input: '', isSearching: false });
  const [input, setInput] = useState({
    id: '',
    name: '',
    description: '',
    tracks: [],
  });
  const history = useHistory();
  const dispatch = useDispatch();
  let { id } = useParams();

  const user = useSelector((state) => state.userReducer);
  const { tracks } = useSelector((state) => state.listsReducer);

  const handleSearch = () => {
    setSearch({ ...search, isSearching: true });
    dispatch(getTracks(search));
  };

  const addTrack = (track) => {
    if (input.tracks.find((item) => item.id === track.id) === undefined) {
      setInput({
        ...input,
        tracks: [...input.tracks, track],
      });
    }
  };

  const removeTrack = (id) => {
    setInput({
      ...input,
      tracks: input.tracks.filter((track) => track.id !== id),
    });
  };

  useEffect(() => {
    if (user.token !== '') {
      let playlist = user.playlists.find((playlist) => playlist._id === id);
      setInput({
        id,
        name: playlist.name,
        description: playlist.description,
        tracks: playlist.tracks,
      });
    }
  }, [user, id]);

  return (
    <UpdatePlaylistStyle>
      <div className="update-playlist-title">
        <Heading2Text weight={500}>Update playlist</Heading2Text>
      </div>
      <div className="update-playlist-form">
        <div className="update-playlist-form-item">
          <BodyDefaultText>Name:</BodyDefaultText>
          <input
            type="text"
            placeholder="Name..."
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div className="update-playlist-form-item">
          <BodyDefaultText>Description:</BodyDefaultText>
          <input
            type="text"
            placeholder="Descripion..."
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          />
        </div>
        <div className="update-playlist-form-item">
          <BodyDefaultText>Add track:</BodyDefaultText>
          {input.tracks && (
            <div className="update-playlist-form-results">
              {input.tracks.length !== 0 &&
                input.tracks.map((track) => (
                  <div
                    className="update-playlist-form-results-item added"
                    key={track.id}
                    onClick={() => removeTrack(track.id)}
                  >
                    <div className="update-playlist-form-results-item__name">
                      <BodyDefaultText>{track.name}</BodyDefaultText>
                    </div>
                    <img
                      className="update-playlist-form-results-item__cover"
                      src={track.image}
                      alt="track"
                    />
                  </div>
                ))}
            </div>
          )}
          <Input
            placeholder={'Search for a song…'}
            search={search.input}
            onChange={setSearch}
            leftIcon={svgSearch}
            rightIcon={search.isSearching && svgClose}
            leftIconFunction={handleSearch}
            rightIconFunction={() => {
              setSearch({ input: '', isSearching: false });
            }}
          />
        </div>
        <div className="update-playlist-form-results">
          {search.isSearching &&
            tracks.map((track) => (
              <div
                className="update-playlist-form-results-item"
                key={track.id}
                onClick={() => addTrack(track)}
              >
                <div className="update-playlist-form-results-item__name">
                  <BodyDefaultText>{track.name}</BodyDefaultText>
                </div>
                <img
                  className="update-playlist-form-results-item__cover"
                  src={track.image}
                  alt="track"
                />
              </div>
            ))}
        </div>
        <div className="update-playlist-form-item buttons">
          <button
            onClick={() => {
              dispatch(updatePlaylist(input));
              setSearch({ ...search, input: '', isSearching: false });
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              dispatch(deletePlaylist(input.id));
              setInput({ name: '', description: '', tracks: [] });
              history.push('/profile');
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setInput({ name: '', description: '', tracks: [] });
              history.goBack();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </UpdatePlaylistStyle>
  );
};

export default UpdatePlaylist;
