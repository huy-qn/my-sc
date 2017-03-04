import React, { Component } from 'react';
import { Draggable, Holdable, defineHold } from 'react-touch';
import moment from 'moment';

let styles = {
  progressBase: {
    backgroundColor: 'white',
    opacity: '0.3',
    width: '100%',
    height: '3px',
    display: 'block',
    content: ' ',
    borderRadius: '50px',
  },

};

class TrackTimer extends Component {
  onClick = () => {
    console.log('Clicked');
  }
  render() {
    const progressValue = ((this.props.currentTime * 1000) / this.props.track.duration) * 100;
    const progress = {
      backgroundColor: 'white',
      height: '3px',
      display: 'block',
      content: ' ',
      borderRadius: '50px',
      position: 'relative',
      top: '3px',
      width: `${progressValue}%`,
    };

    console.log(progressValue);
    const currentTime = moment(this.props.currentTime * 1000).format('mm:ss');
    const timeLeft = moment(this.props.track.duration - (this.props.currentTime * 1000)).format('mm:ss');
    const hold = defineHold({ updateEvery: 50, holdFor: 500});
    return (
      <div className="pl4 pr4 mb4">
        <div className="flex justify-between">
          <span className="white">{currentTime}</span>
          <span className="white">-{(this.props.track.duration ? timeLeft : '00:00')}</span>
        </div>
  <Draggable position={{translateX: 0, translateY: 0}}>
    {({translateX, translateY }) => {

      const pointer = {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'relative',
        top: '10px',
        left: '0%',
        transform: `translate3d(${translateX}px, 0, 0)`,
      };

      console.log(pointer.transform);

      return (
        <div style={pointer}></div>
      );
    }}
  </Draggable>
        <div onClick={() => this.onClick()}>
          <div style={progress}></div>
          <div style={styles.progressBase}></div>
        </div>
      </div>
    );
  }
}

export default TrackTimer;
