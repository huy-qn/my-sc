import React from 'react';

class TrackInfo extends React.Component {
  render() {
    const { track } = this.props;

    if (!track) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <span>{track.title}</span>
        <span>{track.user.username}</span>
      </div>
    );
  }
}

export default TrackInfo;
