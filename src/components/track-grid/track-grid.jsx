import React from 'react';
import TrackGridStyle from './track-grid-style';
import { addToPlayer } from '../../store/actionCreators';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const TrackGrid = ({ data, list, setList, setOnPlay }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <TrackGridStyle>
      {data
        ? data.map((track) => (
            <div
              className="track-grid-item"
              key={track.id}
              onClick={() => {
                dispatch(addToPlayer('', '', [track]));
                history.push('/player');
              }}
            >
              <div className="track-grid-item-name">{track.name}</div>
              <img
                className="track-grid-item-cover"
                src={track.image}
                alt="track"
              />
            </div>
          ))
        : 'Loading...'}
    </TrackGridStyle>
  );
};

export default TrackGrid;
