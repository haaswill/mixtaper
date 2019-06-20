import React, { Component } from 'react';

const SpotifyContext = React.createContext();

export const SpotifyConsumer = SpotifyContext.Consumer;

class SpotifyProvider extends Component {
  state = {
    username: 'Crunchy Crunch',
    dateJoined: '9/1/18',
    membershipLevel: 'Silver'
  }

  render() {
    return (
    // value prop is where we define what values
    // that are accessible to consumer components
      <SpotifyContext.Provider value={this.state}>
        {this.props.children}
      </SpotifyContext.Provider>
    );
  }
}

export default SpotifyProvider;
