import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';


class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineData.person}&apos;s social media feed</h1>
        </header>
        <main className="App-main">
        </main>
        <Timeline events={timelineData.events}/>
      </div>
    );
  }
}

export default App;
