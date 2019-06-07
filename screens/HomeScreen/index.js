import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { AuthSession } from 'expo';
import { Button } from 'react-native-elements';
import SpotifyWebApi from 'react-native-spotify-web-api';

import styles from './styles';

import { SPOTIFY } from '../../config';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loadingSpotify: false,
  }

  _handleSpotifyAuthentication = async () => {
    const res = await this.getAuthorizationCode();
    console.log(res);
  }

  getAuthorizationCode = async () => {
    try {
      const result = await AuthSession.startAsync({
        authUrl: SPOTIFY.getAuthorizeUrl(),
      });
      return result.params.code;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  render() {
    const {
      loadingSpotify,
    } = this.state;

    return (
      <View style={styles.container}>
        <Button
          buttonStyle={styles.spotifyButton}
          loading={loadingSpotify}
          onPress={this._handleSpotifyAuthentication}
          title="Login to Spotify"
        />
      </View>
    );
  }
}
