import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import Counter from './components/Counter';


class App extends Component {
  render() {
    const name = timelineData.person

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{name}</h1>
        </header>
        <main className="App-main">
          <section>
            <Timeline timeline={timelineData} />
          </section>
        </main>
        <footer>
          <small><Counter/></small>
        </footer>
      </div>
    );
  }
}

export default App;
