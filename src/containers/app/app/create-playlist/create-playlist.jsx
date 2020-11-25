import React, { useState } from 'react';
import { CreatePlaylistStyle } from './create-playlist-style';
import svgSearch from '../../../../assets/icons/files/search.svg';
import svgClose from '../../../../assets/icons/files/close.svg';
import { useHistory } from 'react-router-dom';
import {
  BodyDefaultText,
  Heading2Text,
} from '../../../../typography/typography';
import Input from '../../../../components/input/input';
import { useSelector, useDispatch } from 'react-redux';
import { createPlaylist, getTracks } from '../../../../store/actionCreators';

const CreatePlaylist = ({ onClick, onClose }) => {
  const [search, setSearch] = useState({ input: '', isSearching: false });
  const [input, setInput] = useState({
    name: '',
    description: '',
    tracks: [],
  });
  const history = useHistory();
  const dispatch = useDispatch();

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

  return (
    <CreatePlaylistStyle>
      <div className="create-playlist-title">
        <Heading2Text weight={500}>Create playlist</Heading2Text>
      </div>
      <div className="create-playlist-form">
        <div className="create-playlist-form-item">
          <BodyDefaultText>Name:</BodyDefaultText>
          <input
            type="text"
            placeholder="Name..."
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div className="create-playlist-form-item">
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
        <div className="create-playlist-form-item">
          <BodyDefaultText>Add track:</BodyDefaultText>
          {input.tracks && (
            <div className="create-playlist-form-results">
              {input.tracks.length !== 0 &&
                input.tracks.map((track) => (
                  <div
                    className="create-playlist-form-results-item added"
                    key={track.id}
                    onClick={() => removeTrack(track.id)}
                  >
                    <div className="create-playlist-form-results-item__name">
                      <BodyDefaultText>{track.name}</BodyDefaultText>
                    </div>
                    <img
                      className="create-playlist-form-results-item__cover"
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
        <div className="create-playlist-form-results">
          {search.isSearching &&
            tracks.map((track) => (
              <div
                className="create-playlist-form-results-item"
                key={track.id}
                onClick={() => addTrack(track)}
              >
                <div className="create-playlist-form-results-item__name">
                  <BodyDefaultText>{track.name}</BodyDefaultText>
                </div>
                <img
                  className="create-playlist-form-results-item__cover"
                  src={track.image}
                  alt="track"
                />
              </div>
            ))}
        </div>
        <div className="create-playlist-form-item buttons">
          <button
            onClick={() => {
              dispatch(createPlaylist(input));
              setInput({ name: '', description: '', tracks: [] });
              setSearch({ ...search, input: '', isSearching: false });
            }}
          >
            Create
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
    </CreatePlaylistStyle>
  );
};

export default CreatePlaylist;
