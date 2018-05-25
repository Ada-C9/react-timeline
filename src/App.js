import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    console.log(timelineData);

    const testEvents = [
      {
        person: "Ada",
        status: "So stoked - an amazing organization just named itself after me!",
        timestamp: "2018-05-16T22:12:03Z"
      },
      {
        person: "Grace",
        status: "Props to @Ada - so happy for you! Hopefully someone in the future will do the same for me, but TBH it probably won't be quite as good.",
        timestamp: "2018-05-16T22:17:03Z"
      }
    ];

    const eventComponents = testEvents.map((event, index) => {
      return <TimelineEvent key={index} person={event.person} status={event.status} timestamp= {event.timestamp}/>
    })

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
