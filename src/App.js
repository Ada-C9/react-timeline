import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';


class App extends Component {
  render() {
    const data = timelineData.events;
    const user = timelineData.person;

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{user}: Media Timeline</h1>
        </header>
        <main className="App-main">
        </main>
        < Timeline events={data} />
      </div>
    );
  }
}

export default App;
