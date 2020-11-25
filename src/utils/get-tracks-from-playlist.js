import axios from 'axios';
import { napsterConfig } from '../config';

const getTracksFromPlaylist = async (id) => {
  const res = await axios.get(
    `${napsterConfig.url}/v2.2/playlists/${id}/tracks?apikey=${napsterConfig.apikey}&limit=15`
  );
  let list = [];
  res.data.tracks.map((track) =>
    list.push({
      id: track.id,
      name: track.name,
      artist: track.artistName,
      album: track.albumName,
      image: `${napsterConfig.img.url}/${track.albumId}/images/400x400.jpg`,
      link: track.previewURL,
    })
  );
  return list;
};

export default getTracksFromPlaylist;
