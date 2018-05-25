import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

const timelineEvents = timelineData.events;

class App extends Component {
  render() {
    console.log(timelineData.events);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineData.person}&apos;s Social Media Feed</h1>
        </header>
        <main className="App-main">
          <Timeline events={timelineEvents}/>
        </main>
      </div>
    );
  }
}

export default App;
