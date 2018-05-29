import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData.events);
    const theData = timelineData.events;
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SOCIAL LIFE MEDIA</h1>
        </header>
        <main className="App-main">
        <Timeline events={theData}/>
        </main>
      </div>
    );
  }
}

export default App;
