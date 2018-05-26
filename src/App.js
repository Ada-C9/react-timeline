import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);

    const accountOwner = timelineData.person + `'s`;

    // for (let events in timelineData) {
      // const postComponents = timelineData.map((index) => {
      //   <Timeline person={index.person} status={index.status} time={index.timeStamp} />
      // });
    // }

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{accountOwner} social media feed!</h1>
        </header>
        <main className="App-main">
          <Timeline />
        </main>
      </div>
    );
  }
}

export default App;
