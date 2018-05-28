import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);

    const person = timelineData["person"];
    const events = timelineData["events"];

    const timelineComponents = <Timeline person={ person } events={ events } />;

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{`${person}'s Timeline`}</h1>
        </header>
        <main className="App-main">
          { timelineComponents }
        </main>
      </div>
    );
  }
}

export default App;
