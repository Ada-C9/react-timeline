import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

class App extends Component {

  render() {

    let events = timelineData.events.map((article, index) => {
      return <TimelineEvent key={index} person={article.person} event={article.event} date={article.timeStamp} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada's Feed</h1>
        </header>
        <main className="App-main">
          <section>
            {events}
          </section>
        </main>

      </div>
    );
  }
}

export default App;
