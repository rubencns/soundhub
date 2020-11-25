import React, { useState } from 'react';
import Input from '../../../../components/input/input';
import TrackGrid from '../../../../components/track-grid/track-grid';
import HomeStyle from './home-style';
import SearchIcon from '../../../../assets/icons/files/search.svg';
import CloseIcon from '../../../../assets/icons/files/close.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getTracks } from '../../../../store/actionCreators';
import List from '../../../../components/list/list';

const Home = () => {
  const [search, setSearch] = useState({ input: '', isSearching: false });

  const dispatch = useDispatch();
  const { topTracks, topPlaylists, playlistsByTag, tracks } = useSelector(
    (state) => state.listsReducer
  );
  const handleSearch = () => {
    setSearch({ ...search, isSearching: true });
    dispatch(getTracks(search));
  };

  return (
    <HomeStyle>
      <div className="home-search">
        <Input
          home
          placeholder={'Search for a song…'}
          search={search.input}
          onChange={setSearch}
          leftIcon={SearchIcon}
          rightIcon={search.isSearching && CloseIcon}
          leftIconFunction={handleSearch}
          rightIconFunction={() => setSearch({ input: '', isSearching: false })}
        />
      </div>
      {!search.isSearching ? (
        <>
          <List data={topTracks} type="tracks" title="Top Tracks" />
          <List data={topPlaylists} title="Top Playlists" />
          <List data={playlistsByTag} title="Playlists By Tag" />
        </>
      ) : (
        <div className="track-grid">
          <TrackGrid data={tracks} />
        </div>
      )}
    </HomeStyle>
  );
};

export default Home;
