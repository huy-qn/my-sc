import React, { Component } from 'react';

const styles = {
  currentCover: {
    width: '240px',
    height: '240px',
    borderRadius: '4px',
    backgroundSize: 'cover',
    boxShadow: '0px 15px 45px 0px rgba(0,0,0,20)',
  },

};

class TrackCover extends Component {
  render() {
    return (
      <div className="flex justify-center pa4">
        <img className="grow" src={this.props.src} style={styles.currentCover} alt="" />
      </div>
    );
  }
}

export default TrackCover;
