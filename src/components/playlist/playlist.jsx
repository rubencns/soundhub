import React from "react";
import { Link } from "react-router-dom";
import PlaylistStyle from './playlist-style';

const Playlist = ({ list, setList, onPlay, setOnPlay, nextTrack }) => {
  const removeTrack = track => {
    let newList = list.filter(e => e.id !== track.id);
    setList(newList);
    nextTrack(track);
  };

  return (
    <PlaylistStyle>
      {list.map(l => (
        <div className="track-listed" key={l.id}>
          <div className="name" onClick={() => setOnPlay(l)}>
            {l.name}
          </div>
          &nbsp;&nbsp;
          {onPlay ? (l.id === onPlay.id ? "▶" : null) : null}
          &nbsp;&nbsp;
          <button onClick={() => removeTrack(l)}>X</button>
          <Link to={`/play/${l.id}`} className="link">
            &nbsp;&nbsp;See more
          </Link>
        </div>
      ))}
    </PlaylistStyle>
  );
};

export default Playlist;
