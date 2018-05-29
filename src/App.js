import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {

      const thisTimeline = <Timeline events={timelineData.events} />

    console.log(timelineData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineData.person}'s Timeline</h1>
        </header>
        <main className="App-main">
          {thisTimeline}
        </main>
      </div>
    );
  }
}

export default App;
