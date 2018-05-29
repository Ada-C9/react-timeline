import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
const data = timelineData["events"];
const name = timelineData["person"] + `'s`;
    console.log(data);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{name} social media feed</h1>
        </header>
        <main className="App-main">
        <Timeline eventsData= {data}/>
        </main>
      </div>
    );
  }
}

export default App;
