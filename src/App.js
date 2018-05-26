import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    const testPosts = [
      {
        "person": "Adele Goldberg",
        "status": "In Smalltalk, everything happens somewhere else.",
        "timeStamp": "2018-05-18T22:12:03Z"
      },
      {
        "person": "Erica Baker",
        "status": "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention.",
        "timeStamp": "2018-05-18T22:19:40Z"
      } ];

      const thisTimeline = <Timeline events={testPosts} />

    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        {thisTimeline}
        </main>
      </div>
    );
  }
}

export default App;
