import React, { Component } from 'react';
import {
  PlayIcon,
  PauseIcon,
  PrevIcon,
  NextIcon,
} from '../player-icons';

class TrackController extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center mb3">
          <button className="bg-transparent outline-0 grow" onClick={this.props.prev}><PrevIcon width={16} height={16} color={this.props.color} /></button>
          <button className="bg-transparent outline-0 ml2 mr2 grow" onClick={this.props.play} color={this.props.color}>
            {this.props.playing ?
              <PauseIcon width={42} height={42} color={this.props.color} />
              : <PlayIcon width={42} height={42} color={this.props.color} />}
          </button>
          <button className="bg-transparent outline-0 grow" onClick={this.props.next}><NextIcon width={16} height={16} color={this.props.color} /></button>
        </div>
      </div>
    );
  }
}

export default TrackController;
