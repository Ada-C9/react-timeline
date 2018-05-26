import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


class App extends Component {
  render() {
    console.log(timelineData);
    const appClassName = "Ada Lovelace's social media feed"
    const events = timelineData["events"]

    return (
      <div className={appClassName}>
        <header className="App-header">
          <h1 className="App-title">{appClassName}</h1>
        </header>
        <main className="App-main">
          <Timeline
            events={events}
          />
        </main>
      </div>
    );
  }
}

export default App;
