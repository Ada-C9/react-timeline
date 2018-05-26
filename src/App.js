import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    const seedData = timelineData.events
    const feedData = seedData.map((user, index) => {
      return (<TimelineEvent key={index} person={ user.person } status={user.status} posted={user.timeStamp} />)
    });

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
