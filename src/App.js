import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData.events.length);

    const accountOwner = timelineData.person + `'s`;

    const postComponents = timelineData.events.map((post) => {
      for (let key in post) {
        return <Timeline events={post["person"]} />
      }
    });

    console.log(postComponents);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{accountOwner} social media feed!</h1>
        </header>
        <main className="App-main">
        {postComponents}
        </main>
      </div>
    );
  }
}

export default App;
