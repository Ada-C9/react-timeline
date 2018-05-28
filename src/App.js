import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent.js';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    // console.log('TimelineData');
    // console.log(timelineData.events);
    // let data = timelineData["events"];
    // console.log(data);
let array_of_users = timelineData.events;
//pass in array of events Here
console.log(array_of_users)

//
// let array_of_users = timelineData.events;
// console.log(array_of_users);

  // const timelineData = data.map((a_post) => {
  //     return (<TimelineEvent
  //         key={a_post.timeStamp}
  //         person= {a_post.person}
  //         status= {a_post.status}
  //         timeStamp= {a_post.timeStamp}/>
  //       )
  //   });
//above it .map method

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        </main>
        <div>
          < Timeline events={array_of_users} />
        </div>
      </div>
    );
  }
}

export default App;
