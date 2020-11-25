import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TrackStyle from './track-style';
import { napsterConfig } from '../../../../config';

const Track = ({ match }) => {
  const [track, setTrack] = useState([]);
  const getTrack = async (id = match.params.id) => {
    try {
      const { data } = await axios.get(
        napsterConfig.url +
          '/v2.2/tracks/' +
          id +
          '?apikey=' +
          napsterConfig.apikey
      );
      setTrack(data.tracks[0]);
    } catch (e) {
      console.error('An error ocurred.', e);
    }
  };

  useEffect(() => {
    getTrack();
  }, []);

  return (
    <TrackStyle>
      <img
        className="cover"
        src={`${napsterConfig.img.url}/${track.albumId}/images/400x400.jpg`}
        alt="track"
      />
      <h1>{track.name}</h1>
      <audio src={track.previewURL} controls>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <Link to="/" className="link">
        Back to Home
      </Link>
    </TrackStyle>
  );
};

export default Track;
