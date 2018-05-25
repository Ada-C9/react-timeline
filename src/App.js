import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
// import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    const timelineEventsList = <Timeline eventsList={timelineData['events']}/>;
    const pageTitle = timelineData['person'] + '\'s Social Media Feed';

    console.log(timelineData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{pageTitle}</h1>
        </header>
        <main className="App-main">
        {timelineEventsList}
        </main>
      </div>
    );
  }
}

export default App;
