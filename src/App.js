import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  // don't worry about formatting time

  render() {
    console.log(timelineData);
    // const post1 = (<TimelineEvent name="Ashton k." status="I do interesting things all day" timestamp= "2018-05-18T22:12:03Z" />);

    const postData = [
      {
        person: 'Ada',
        status: 'ada@ada.co',
        timeStamp: '2018-05-18T22:12:03Z'
      },
      {
        person: 'JJ',
        status: 'jj@ada.co',
        timeStamp: '2018-05-18T22:12:03Z'
      }
  ];

    const posts = postData.map((post)=> {
      return <TimelineEvent person={ post.person } status={ post.status } timeStamp={ post.timestamp } />
    });

    // const studentComponents = students.map((student) => {
    //     return <Student name={ student.name } email={ student.email } />
    //   });

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        {posts}
        </main>
      </div>
    );
  }
}

export default App;
