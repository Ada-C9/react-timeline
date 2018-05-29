import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData.events);

    const allPosts = timelineData.events;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada&apos;s Feed</h1>
        </header>
        <main className="App-main">

        <Timeline events= { allPosts }/>

        </main>
      </div>
    );
  }
}

export default App;
