import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
import Timestamp from './components/Timestamp';


class App extends Component {
  render() {
    let username = timelineData.person
    console.log(timelineData)

    let events = timelineData.events

    const eventComponents = events.map((event) => {
      return <TimelineEvent person={ event.person } status={ event.status } timeStamp={ event.timeStamp } />
    });

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{username}'s social media feed</h1>
        </header>
        <main className="App-main">
          {eventComponents}
        </main>
      </div>
    );
  }
}

export default App;
