import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    console.log(timelineData);


    const eventComponents = timelineData.events.map((event) => {
      return(
        <li key={event.person}>
        <TimelineEvent
        person={event.person}
        status={event.status}
        time={event.timeStamp}
        />
        </li>
      );
    });

    // Customize the code below
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">

      {eventComponents}


      </main>
      </div>
    );
  }
}

export default App;
