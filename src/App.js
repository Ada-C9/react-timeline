import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent'
import Timeline from './components/Timeline';


class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    const timelinejsonData = timelineData["events"].map((event, index) => {
      return <TimelineEvent key={index} person={event.person} status={event.status} timestamp={event.timeStamp} />
    });


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">


        {timelinejsonData}
          <TimelineEvent person="Kiera" status="I want to take a nap" timestamp="" />

        </main>
      </div>
    );
  }
}

export default App;
