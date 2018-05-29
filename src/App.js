import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent.js'

class App extends Component {

  render() {
    console.log(timelineData);
    
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grapevine</h1>
        </header>
        <main className="App-main">

          <ul>
            < Timeline events={timelineData.events} />
          </ul>

        </main>
      </div>
    );
  }
}

export default App;
