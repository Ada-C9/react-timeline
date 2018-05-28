import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada&#39;s Feed</h1>
        </header>
        <main className="App-main">
          <section id='app'>
            <Timeline events={timelineData.events} />
          </section>
        </main>

      </div>
    );
  }
}

export default App;
