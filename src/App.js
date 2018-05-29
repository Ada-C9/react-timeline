import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import Timestamp from './components/Timestamp';

class App extends Component {
  render() {
    console.log(timelineData);

    // const posts = [
    //   {
    //     person: "Maggie Mutt",
    //     status: "Guess what I smelled today!",
    //     timestamp: "2018-05-18T22:19:40Z"
    //   }
    // ]

    // const postsComponents = timelineData.events.map((post) => {
    //   return (
    //     <li key={post.person}>
    //       <p>{post.person}</p>
    //       <p>{post.status}</p>
    //       <p><Timestamp time={post.timestamp}/></p>
    //     </li>
    //   );
    // });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Really Realistic Life Posts</h1>
        </header>
        <main className="App-main">
          <Timeline events={timelineData.events} />
        </main>
      </div>
    );


  }
}

export default App;
