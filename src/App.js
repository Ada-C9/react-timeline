import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    console.log(timelineData);
    const timelineComponents = timelineData.events.map((event) => {
      return <TimelineEvent person = { event.person } status = {event.status} timeStamp = {event.timeStamp}/>
    });
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Social Media Feed</h1>
        </header>
        <main className="App-main">
        { timelineComponents }
        </main>
      </div>
    );
  }
}

export default App;
