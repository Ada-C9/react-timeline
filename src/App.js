import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


class App extends Component {
  render() {
    console.log(timelineData);
    const events = [
      {
        "person": "Adele Goldberg",
        "status": "In Smalltalk, everything happens somewhere else.",
        "timeStamp": "2018-05-18T22:12:03Z"
      },
      {
        "person": "Erica Baker",
        "status": "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention.",
        "timeStamp": "2018-05-18T22:19:40Z"
      },
      {
        "person": "Aubrey Tang",
        "status": "The art of computer programming is a blend of mathematics and poetry.",
        "timeStamp": "2018-05-18T22:41:19Z"
      },
      {
        "person": "Julia Evans",
        "status": "no seriously what if we replaced tech books with informative concise 30 page zines though",
        "timeStamp": "2018-05-18T23:02:44Z"
      }
    ];

    // Customize the code below
    const eventComponents =
    events.map((event) => {
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
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        </main>
        {eventComponents}
      </div>
    );
  }
}

export default App;
