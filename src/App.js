import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    // const currTimelineEvents = timelineData['events'];
    const timelineEventsList = <Timeline eventsList={timelineData['events']}/>;

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
