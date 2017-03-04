import React, { Component, PropTypes } from 'react';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';


class BasicSoundPlayer extends Component {
  play = () => {
    const { soundCloudAudio, playing } = this.props;
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  }

  render() {
    const { track, playing } = this.props;

    if (!track) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{track.title}</h2>
        <h3>{track.user.username}</h3>
        <button onClick={this.play}>
          {playing ? 'Pause' : 'Play'}
        </button>

      </div>
    );
  }
}

BasicSoundPlayer.propTypes = {

};

export default BasicSoundPlayer;
