import React, { Component } from 'react';

const styles = {
  listItem: 'bg-white tl',
  activeListItem: 'bg-black white tl',
};

class PlaylistInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }
  render() {
    const { playlist } = this.props;
    if (!playlist) {
      return <span>loading</span>;
    }
    const tracks = playlist.tracks.map((track, i) => {
      return (
        <button
          key={track.id}
          className={
            (this.state.activeIndex === i)
            ? `${styles.activeListItem}` : `${styles.listItem}`}
        >
          <span>{track.title}</span>
        </button>
      );
    });

    console.log(this.props.activeIndex);

    return (
      <div>
        {tracks}
      </div>
    );
  }
}

export default PlaylistInfo;
