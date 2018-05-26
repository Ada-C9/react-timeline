import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    const eventComponents =
    timelineData.events.map((event) => {
    return (
      <TimelineEvent
      key={event.timeStamp}
      person={event.person}
      status={event.status}
      timestamp={event.timeStamp}
      />
    );
  });

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineData.person}&apos;s social media feed</h1>
        </header>
        <main className="App-main">
        </main>
        {eventComponents}
      </div>
    );
  }
}

export default App;
