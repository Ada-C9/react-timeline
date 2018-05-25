import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timestamp from './components/Timestamp';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);


    const tweets = [
      {
        name: 'Herman Granger',
        status: 'It is LeviOsa not LEVIosaa',
        timestamp: '2018-05-18T22:12:03Z'
      },
      {
        name: 'Harriet Potter',
        status: 'Brilliant!',
        timestamp: '2018-05-18T22:12:03Z'
      },
      {
        name: 'Hagrid',
        status: 'Yer a wizard Harriet!',
        timestamp: '2018-05-18T22:12:03Z'
      }
    ];

    const timelineComponents = tweets.map((tweet) => {
      return (
        <li key={tweet.name} >
          <p><strong>{tweet.name}</strong></p>
          <p>Message: "{tweet.status}"</p>
          <p><Timestamp time={tweet.timestamp} /></p>
        </li>
      );
    });
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Timeline App</h1>
        </header>
        <main className="App-main">
        {timelineComponents}
        </main>
      </div>
    );
  }
}

export default App;
