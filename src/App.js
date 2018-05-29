import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent.js'

class App extends Component {

  render() {
    console.log(timelineData);

    const posts = [
        {
          person: 'Harriet Potter',
          status: 'i am more than anti-voldemort',
          timestamp: Date.now
        },
        {
          person: 'Ada',
          status: 'coding for the future',
          timestamp: Date.now
        },

        {
          person: 'Hermonie',
          status: 'time travelling by 14, saving the world again',
          timestamp: Date.now
        },
      ];

      const postComponents = posts.map((post) => {

        return (
          <li key={post.person}>

            < TimelineEvent
              person = {post.person}
              status = {post.status}
              timestamp = {post.timestamp}
            />

          </li>
        );
      });


    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grapevine</h1>
        </header>
        <main className="App-main">

          <ul>
            {postComponents}
          </ul>

        </main>
      </div>
    );
  }
}

export default App;
