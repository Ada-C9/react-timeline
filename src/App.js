import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'

class App extends Component {
  render() {
    console.log(timelineData);


    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">

        <Timeline data = {timelineData}/>
        </main>
      </div>
    );
  }
}

export default App;
