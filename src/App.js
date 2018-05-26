import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {

  render() {
    const feedData = <Timeline events={timelineData.events} />

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada social media page</h1>
        </header>
        <main className="App-main">
          { feedData }
        </main>
      </div>
    );
  }
}

export default App;
