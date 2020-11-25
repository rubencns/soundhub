import React, { useState, useEffect, useRef } from 'react';
import { PlayerStyle } from './player-style';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ReactComponent as PlayIcon } from '../../../../assets/icons/files/play.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/icons/files/pause.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/icons/files/close.svg';
import { ReactComponent as DollarIcon } from '../../../../assets/icons/files/dollar.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/icons/files/plus.svg';
import { ReactComponent as HeartIcon } from '../../../../assets/icons/files/heart.svg';
import { ReactComponent as PencilIcon } from '../../../../assets/icons/files/pencil.svg';
import {
  BodyDefaultText,
  Heading3Text,
  BodySmallText,
} from '../../../../typography/typography';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { followPlaylist } from '../../../../store/actionCreators';
import { toast } from 'react-toastify';
import Modal from '../../../../components/modal/modal';
import ModalDonate from '../../../../components/modal-donate/modal-donate';
import ModalAddTrack from '../../../../components/modal-add-track/modal-add-track';

const Player = () => {
  const [list, setList] = useState([]);
  const [onPlay, setOnPlay] = useState();
  const [showPlaylist, setShowPlaylist] = useState(false);
  const player = useSelector((state) => state.playerReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [isFollowing, setFollowing] = useState();
  const history = useHistory();
  const [modal, setModal] = useState('');
  const audioPlayer = useRef();

  useEffect(() => {
    let newList = [];
    player.list.map((track, index) => newList.push({ ...track, index: index }));
    setList(newList);
    setOnPlay(newList[0]);
    setFollowing(
      user.following && user.following.find((id) => id === player.id)
    );
  }, [player, user]);

  const handleFollowing = () => {
    dispatch(followPlaylist(player.id));
    setFollowing(!isFollowing);
    !isFollowing ? toast.info('Followed') : toast.info('Not followed');
  };

  return (
    <>
      <PlayerStyle>
        <div className="player-buttons">
          {player.list.length !== 0 && (
            <button
              className="player-button"
              onClick={() => setShowPlaylist(!showPlaylist)}
            >
              {showPlaylist ? (
                <CloseIcon className="player-button close" />
              ) : (
                <PlayIcon className="player-button show" />
              )}
            </button>
          )}
          {player.list.length !== 0 && !showPlaylist && (
            <button
              className="player-button"
              onClick={() => {
                setModal('add-track');
                audioPlayer.current.audio.current.pause();
              }}
            >
              <HeartIcon className="player-button all" />
            </button>
          )}
          {player.list.length !== 0 && !showPlaylist && (
            <button
              className="player-button"
              onClick={() => {
                setModal('donate');
                audioPlayer.current.audio.current.pause();
              }}
            >
              <DollarIcon className="player-button all" />
            </button>
          )}
          {!user.playlists.some((playlist) => playlist._id === player.id) &&
            player.list.length !== 0 &&
            player.id !== '' && (
              <button className="player-button" onClick={handleFollowing}>
                <PlusIcon className="player-button all" />
              </button>
            )}
          {user.playlists.some(({ _id }) => _id === player.id) && (
            <button
              className="player-button"
              onClick={() => history.push(`/update-playlist/${player.id}`)}
            >
              <PencilIcon className="player-button all" />
            </button>
          )}
          <div className="player-playlist-title">
            <Heading3Text>{player.name}</Heading3Text>
          </div>
        </div>
        <div className={`player-track${showPlaylist ? ' hide' : ''}`}>
          {onPlay ? (
            <>
              <img
                className="player-track-cover"
                src={onPlay.image}
                alt="track"
              />
              <div className="player-track-title">
                <Heading3Text weight={600}>{onPlay.name}</Heading3Text>
              </div>
              <div className="player-track-album">
                <BodyDefaultText>{onPlay.album}</BodyDefaultText>
              </div>
              <div className="player-track-artist">
                <Heading3Text>{onPlay.artist}</Heading3Text>
              </div>
            </>
          ) : (
            <BodyDefaultText>
              No track or playlist added. <Link to="/">Search for a song</Link>
            </BodyDefaultText>
          )}
        </div>

        <div className={`player-list${!showPlaylist ? ' hide' : ''}`}>
          {list &&
            list.map((track, index) => (
              <div
                className="player-list-track"
                key={track.id}
                onClick={() => {
                  setOnPlay(list[index]);
                  setShowPlaylist(false);
                }}
              >
                <div className="player-list-track-icon">
                  {onPlay === track ? <PlayIcon /> : <PauseIcon />}
                </div>
                <div className="player-list-track-info">
                  <div className="player-list-track-info__item">
                    <BodyDefaultText>{track.name}</BodyDefaultText>
                    <BodySmallText>{track.album}</BodySmallText>
                  </div>
                  <div className="player-list-track-info__item">
                    <BodyDefaultText>{track.artist}</BodyDefaultText>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <AudioPlayer
          className="audio-player"
          autoPlay
          showSkipControls
          showJumpControls={false}
          src={onPlay && onPlay.link}
          onClickNext={() =>
            onPlay.index >= list.length - 1
              ? setOnPlay(list[0])
              : setOnPlay(list[onPlay.index + 1])
          }
          onClickPrevious={() =>
            onPlay.index === 0
              ? setOnPlay(list[list.length - 1])
              : setOnPlay(list[onPlay.index - 1])
          }
          onEnded={() =>
            onPlay.index >= list.length - 1
              ? setOnPlay(list[0])
              : setOnPlay(list[onPlay.index + 1])
          }
          ref={audioPlayer}
        />
      </PlayerStyle>
      <Modal
        title={`Donate to ${onPlay && onPlay.artist}`}
        active={modal === 'donate'}
        onClose={() => {
          setModal('');
          audioPlayer.current.audio.current.play();
        }}
      >
        <ModalDonate
          artist={onPlay && onPlay.artist}
          onClose={() => setModal('')}
        />
      </Modal>
      <Modal
        title={'Add track to'}
        active={modal === 'add-track'}
        onClose={() => {
          setModal('');
          audioPlayer.current.audio.current.play();
        }}
      >
        <ModalAddTrack track={onPlay && onPlay} onClose={() => setModal('')} />
      </Modal>
    </>
  );
};

export default Player;
