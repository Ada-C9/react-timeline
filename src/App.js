import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {

    // const timelineEvents = timelineData.events.map((event) => {
    //   return <TimelineEvent person={event.person} email={event.status} />
    // });
    const eventData = timelineData.events;
    console.log(eventData);
    // const someThings = [{
    //   person: 'me',
    //   status: 'ok',
    //   timestamp: Date.now()
    // },
    // {
    //   person: 'you',
    //   status: 'eh',
    //   timestamp: Date.now()
    // }]

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is the social media</h1>
        </header>
        <main className="App-main">
          <Timeline data={eventData}/>
        </main>
      </div>
    );
  }
}

export default App;
