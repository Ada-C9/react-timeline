import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {

    const eventData = timelineData.events;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is the social media</h1>
        </header>
        <main className="App-main">
          <Timeline data={eventData}/>
        </main>
      </div>
    );
  }
}

export default App;
