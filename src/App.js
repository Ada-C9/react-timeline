import React, { Component } from 'react';
import './App.css';
import timeLineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {

    const data = timeLineData["events"];
    console.log(data);

    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace Timeline Feed</h1>
      </header>
      <main className="App-main">

          <div>
          < Timeline events = { data } />
          </div>
      </main>
      </div>
    );
  }
}

export default App;
