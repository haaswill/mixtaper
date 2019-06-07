import { spotifyCredentials } from './secrets';

const SPOTIFY_SCOPE_ARRAY = ['playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public', 'playlist-modify-private'];

const getSpotifyAuthorizeUrl = () => {
  const scopes = SPOTIFY_SCOPE_ARRAY.join(' ');
  return `https://accounts.spotify.com/authorize?response_type=code&client_id=${spotifyCredentials.clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(spotifyCredentials.redirectUri)}`;
};

const INSTAGRAM = {

};

const SPOTIFY = {
  apiUrl: 'https://accounts.spotify.com',
  getAuthorizeUrl: getSpotifyAuthorizeUrl,
};

export { INSTAGRAM, SPOTIFY };
