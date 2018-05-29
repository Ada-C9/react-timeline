import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';


class App extends Component {
  render() {
    console.log(timelineData);
    const data = timelineData;

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace social media feed</h1>
        </header>
        <main className="App-main">
      <Timeline timelineComponent={data} />
        </main>
      </div>
    );
  }
}

export default App;
