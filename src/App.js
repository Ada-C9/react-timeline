import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);

    const timeLineData = [
      ( <Timeline person="Adele Goldberg" status= "In Smalltalk, everything happens somewhere else" timestamp= "2018-05-18T22:12:03Z"
      />),
      ( <Timeline person= "Erica Baker" status= "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention" timestamp= "2018-05-18T22:19:40Z"/>),
      ( <Timeline person= "Aubrey Tang" status= "The art of computer programming is a blend of mathematics and poetry" timestamp= "2018-05-18T22:41:19Z"/>)
    ]

    // Customize the code below
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <h1>Timeline</h1>

      <div>{ timeLineData }</div>

      </main>
      </div>
    );
  }
}

export default App;

// For wave 1 implement the render function of TimelineEvent. It should take 3 props.

// person - the person making the post.
// status - the message being posted.
// timestamp - the date-time of the event.


// Test the component by rendering it with hardcoded data inside the App component. TimelineEvent should use the Timestamp component to render the time & date of the event.
