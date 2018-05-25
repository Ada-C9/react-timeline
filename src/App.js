import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
import Timestamp from './components/Timestamp';


class App extends Component {
  render() {
    console.log(timelineData);

    const fauxData = [
      {
        person: 'Angela',
        status: 'same same',
        timeStamp: '2018-05-18T22:19:40Z'
      },
      {
        person: 'Karinna',
        status: 'eh',
        timeStamp: '2018-05-18T22:19:40Z'
      },
      {
        person: 'Tor',
        status: '<emoji>',
        timeStamp: '2018-05-18T22:19:40Z'
      }
    ];

    const eventComponents = fauxData.map((event) => {
      return <TimelineEvent person={ event.person } status={ event.status } timeStamp={ event.timeStamp } />
    });

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace's social media feed</h1>
        </header>
        <main className="App-main">
          {eventComponents}
        </main>
      </div>
    );
  }
}

export default App;
