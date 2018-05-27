import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {

    const accountOwner = timelineData.person + `'s`;

    const eventComponents = <Timeline events={timelineData.events} />

    console.log(eventComponents);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{accountOwner} social media feed!</h1>
        </header>
        <main className="App-main">
        {eventComponents}
        </main>
      </div>
    );
  }
}

export default App;
