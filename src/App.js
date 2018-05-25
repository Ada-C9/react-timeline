import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {



  render() {
    const currTimelineEvents = [
      {
        person: "Foo",
        status: "Hello, World",
        time: "2018-05-18T22:19:40Z"
      },
      {
        person: "Bar",
        status: "I like pie",
        time: "2018-05-18T22:19:40Z"
      }
    ];

    const eventsComponents = currTimelineEvents.map((oneEvent) => {
      return (
        <TimelineEvent
          person={oneEvent.person}
          status={oneEvent.status}
          time={oneEvent.time}
        />
      );
    });
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        <p>{eventsComponents}</p>
        </main>
      </div>
    );
  }
}

export default App;
