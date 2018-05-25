import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'

class App extends Component {
  render() {
    console.log(timelineData);
    console.log(timelineData.events[0].person);


    const timelineEvents = timelineData.events.map((e) => {
      console.log(e.timeStamp);
      return (
      <TimelineEvent
        key={e.timeStamp}
        person={e.person}
        status={e.status}
        time={e.timeStamp}
        />
      )
    })


    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        </main>
        {timelineEvents}
      </div>
    );
  }
}

export default App;
