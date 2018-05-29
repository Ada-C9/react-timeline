import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json'
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
import Timestamp from './components/Timestamp';

class App extends Component {
  render() {
    const timelineOwner = timelineData.person;
    const timelineFeed = timelineData.events;
    console.log(timelineFeed)
    const timelineComponents = timelineFeed.map((item) => {
      let itemTimeStamp = <Timestamp
        time= {item.timeStamp}
      />
      return (
        <TimelineEvent
        key={item.person}
        status={item.status}
        timestamp= {itemTimeStamp}
        person={item.person}
        />
      );
    });

    console.log(timelineComponents)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{timelineOwner}'s Social Media Feed: All the Media that's Fit to Share</h1>
        </header>
        <main className="App-main">
          <article>
            {timelineComponents}
          </article>

        </main>
      </div>
    );
  }
}

export default App;
