import axios from 'axios';
import { napsterConfig } from '../config';

const getPlaylist = async (id) => {
  return await axios.get(
    `${napsterConfig.url}/v2.2/playlists/${id}?apikey=${napsterConfig.apikey}`
  );
};

export default getPlaylist;
