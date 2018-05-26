import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zheng's Social Media Feed</h1>
        </header>
        <main className="App-main">
          <Timeline />
        </main>
      </div>
    );
  }
}

export default App;
