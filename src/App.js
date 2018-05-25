import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'

class App extends Component {
  render() {
    console.log(timelineData);
    console.log(timelineData.events[0].person);


    const data = timelineData.events



    // const Timeline = timelineEvents

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Timeline</h1>
        </header>
        <main className="App-main">
        </main>
        < Timeline events={data} />
      </div>
    );
  }
}

export default App;
