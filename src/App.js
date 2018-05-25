import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


class App extends Component {
  render() {
    console.log(timelineData);
    const appClassName = "Ada Lovelace's social media feed"
    // Customize the code below
    return (
      <div className={appClassName}>
        <header className="App-header">
          <h1 className="App-title">{appClassName}</h1>
        </header>
        <main className="App-main">
          <TimelineEvent
            name="Henry"
            status="Eating pizza"
          />
        </main>
      </div>
    );
  }
}

export default App;
