import React from 'react';
import ListStyle from './list-style';
import {
  Heading2Text,
  BodySmallText,
  BodyDefaultText,
} from '../../typography/typography';
import axios from 'axios';
import config from '../../config';
import { addToPlayer } from '../../store/actionCreators';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getTracksFromPlaylist from '../../utils/get-tracks-from-playlist';

const List = ({ type, title, data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePlayer = async (id, name) => {
    try {
      const tracks = await getTracksFromPlaylist(id);
      dispatch(addToPlayer(id, name, tracks));
      history.push('/player');
    } catch (e) {
      console.log('An error ocurred.');
    }
  };

  return (
    <ListStyle>
      {type === 'tracks' ? (
        <>
          <div className="list-title">
            <Heading2Text weight={500}>{title}</Heading2Text>
            <BodySmallText className="list-results">
              ({data.length})
            </BodySmallText>
            <button
              className="list-button"
              onClick={() => {
                dispatch(addToPlayer('', title, data));
                history.push('/player');
              }}
            >
              Play
            </button>
          </div>
          <div className="list-container">
            {data.length !== 0 ? (
              data.map((track) => (
                <div
                  className="list-item"
                  key={track.id}
                  onClick={() => {
                    dispatch(addToPlayer('', '', [track]));
                    history.push('/player');
                  }}
                >
                  <div className="list-item__name">
                    <span>{track.name}</span>
                  </div>
                  <img
                    className="list-item__cover"
                    src={track.image}
                    alt="track"
                  />
                </div>
              ))
            ) : (
              <BodyDefaultText>No data.</BodyDefaultText>
            )}
          </div>
        </>
      ) : data.length !== 0 ? (
        <>
          <div className="list-title">
            <Heading2Text weight={500}>{title}</Heading2Text>
            <BodySmallText className="list-results">
              ({data.length})
            </BodySmallText>
          </div>
          <div className="list-container">
            {data.map((playlist) => (
              <div
                className="list-item"
                key={playlist.id}
                onClick={() => handlePlayer(playlist.id, playlist.name)}
              >
                <div className="list-item__name">
                  <span>{playlist.name}</span>
                </div>
                <img
                  className="list-item__cover"
                  src={playlist.image}
                  alt="track"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <BodyDefaultText>No data.</BodyDefaultText>
      )}
    </ListStyle>
  );
};

export default List;
