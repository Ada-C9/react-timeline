import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {

    const eventComponents = timelineData.events;

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Ada{"'"}s Social Feed</h1>
      </header>
      <main className="App-main">

      <Timeline events={eventComponents} />

      </main>
      </div>
    );
  }
}

export default App;
