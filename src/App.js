import React, { Component } from 'react';
import Playlist from './components/Playlist';


import './App.css';

const clientId = 'd4f900f21e0f5e41cfbdac2fdaf9337b';
const resolveUrl = 'https://soundcloud.com/imaxdsvn/sets/homesick-month';


class App extends Component {
  render() {
    return (
      <div className="vh-100">
        <Playlist clientId={clientId} resolveUrl={resolveUrl} />
      </div>
    );
  }
}

export default App;
