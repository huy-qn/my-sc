import React, { Component, PropTypes } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import TrackTimer from './TrackTimer';
import TrackCover from './TrackCover';
import TrackController from './TrackController';
import TrackDetails from './TrackDetails';

class Player extends Component {

  constructor() {
    super();

    this.state = {
      activeIndex: 0,
    };
  }

  getCurrentCover = () => {
    const { playlist } = this.props;
    let currentCover;

    if (!playlist) {
      return currentCover = 'https://i1.sndcdn.com/artworks-000187500582-t75csm-t500x500.jpg';
    }

    const { activeIndex } = this.state;

    if (!playlist.tracks[activeIndex].artwork_url) {
      currentCover = 'https://i1.sndcdn.com/artworks-000187500582-t75csm-t500x500.jpg';
    } else {
      currentCover = playlist.tracks[activeIndex].artwork_url.replace('large', 't500x500');
    }

    return currentCover;
  }


  getCurrentTrack = () => {
    const { playlist } = this.props;

    if (!playlist) {
      return <span> Loading... </span>;
    }

    const { activeIndex } = this.state;

    return playlist.tracks[activeIndex];
  }

  getCurrentUser = () => {
    const { playlist } = this.props;

    if (!playlist) {
      return <span>User Loading</span>;
    }

    const currentTrack = this.getCurrentTrack();
    const currentUser = currentTrack.user;

    return currentUser;
  }

  isPlaylistLoaded = () => {
    const { playlist } = this.props;

    if (!playlist) {
      return false;
    }
    return playlist;
  }

  playThisIndex = (playlistIndex) => {
    const { soundCloudAudio } = this.props;
    this.setState({ activeIndex: playlistIndex });
    soundCloudAudio.play({ playlistIndex });
  }

  nextIndex = () => {
    let { activeIndex } = this.state;
    const { playlist, soundCloudAudio, playing } = this.props;
    if (activeIndex >= playlist.tracks.length - 1) {
      return;
    }
    if (activeIndex || activeIndex === 0) {
      this.setState({
        activeIndex: ++activeIndex,
        currentTrack: playlist.tracks[activeIndex],
      });
    }
    if (playing) {
      soundCloudAudio.play({ playlistIndex: activeIndex });
    }
  }

  prevIndex = () => {
    let { activeIndex } = this.state;
    const { soundCloudAudio, playing } = this.props;
    if (activeIndex <= 0) {
      return;
    }
    if (activeIndex || activeIndex === 0) {
      this.setState({ activeIndex: --activeIndex });
    }
    if (playing) {
      soundCloudAudio.play({ playlistIndex: activeIndex });
    }
  }

  play = () => {
    const { soundCloudAudio, playing } = this.props;
    const { activeIndex } = this.state;
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play({ playlistIndex: activeIndex });
    }
  }

  render() {
    const { playing, soundCloudAudio, playlist, currentTime } = this.props;
    const currentTrack = this.getCurrentTrack();
    const currentCover = this.getCurrentCover();
    const currentUser = this.getCurrentUser();

    const blurCurrentCover = {
      styles: {
        backgroundImage: `url(${currentCover})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: '0',
        transform: 'scale(1)',
        filter: 'blur(5px)',
        opacity: '0.8',
        zIndex: '-2',
      },

      blackLayer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        backgroundPosition: 'center',
        position: 'absolute',
        top: '0',
        opacity: '0.7',
        zIndex: '-1',
      },
    };

    return (
      <div>
        <TrackCover src={currentCover} />
        <TrackDetails title={currentTrack.title} user={currentUser.username} />
        <TrackTimer currentTime={currentTime} track={currentTrack} />
        <TrackController
          playing={playing}
          play={() => this.play()}
          next={() => this.nextIndex()}
          prev={() => this.prevIndex()}
          color="white"
        />
        <div style={blurCurrentCover.blackLayer} className="vh-100" />
        <div style={blurCurrentCover.styles} className="vh-100" />
      </div>
    );
  }
}


class Playlist extends Component {
  render() {
    return (
      <SoundPlayerContainer
        clientId={this.props.clientId}
        resolveUrl={this.props.resolveUrl}
      >
        <Player />
      </SoundPlayerContainer>
    );
  }
}

Playlist.propTypes = {

};

export default Playlist;
