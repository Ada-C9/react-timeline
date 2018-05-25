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
        time: "2018-05-18T22:19:40"
      },
      {
        person: "Bar",
        status: "I like pie",
        time: "2018-05-22T22:19:00"
      }
    ];

    const timelineEventsList = <Timeline eventsList={currTimelineEvents}/>;

    console.log(timelineData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        {timelineEventsList}
        </main>
      </div>
    );
  }
}

export default App;
