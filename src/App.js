import React, { Component } from 'react';
import './App.css';
import data from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    const timelineOwner = data.person
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineOwner + `'`}s social media feed</h1>
        </header>
        <main className="App-main">
          <Timeline events={data.events} />
        </main>
      </div>
    );
  }
}

export default App;
