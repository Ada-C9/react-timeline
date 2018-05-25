import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';
import Timestamp from './components/Timestamp';

class App extends Component {
  render() {

    console.log(timelineData);

    // Customize the code below
    const timelineEvents = [
      {
        person: "Person Test",
        status: "Status Test",
        timestamp: "Timestamp Test"
      },
    ];

    const timeline = [
      {
        events: [
          {
            "person": "Adele Goldberg",
            "status": "In Smalltalk, everything happens somewhere else.",
            "timeStamp": "2018-05-18T22:12:03Z"
          },
          {
            "person": "Erica Baker",
            "status": "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention.",
            "timeStamp": "2018-05-18T22:19:40Z"
          },
          {
            "person": "Aubrey Tang",
            "status": "The art of computer programming is a blend of mathematics and poetry.",
            "timeStamp": "2018-05-18T22:41:19Z"
          },
          {
            "person": "Julia Evans",
            "status": "no seriously what if we replaced tech books with informative concise 30 page zines though",
            "timeStamp": "2018-05-18T23:02:44Z"
          },
          {
            "person": "Stephanie Hurlburt",
            "status": "I don’t think you can do good work if you’re not at least occasionally talking to a person you’re building for.",
            "timeStamp": "2018-05-18T23:09:38Z"
          },
          {
            "person": "Yan Zhu",
            "status": "//for a good time, paste this into twitter page console: c=new AudioContext;n=setInterval(\"for(n+=7,i=k,P='\u25b2.\\\n';i-=1/k;P+=P[i%2?(i%2*j-j+n/k^j)&1:2])j=k/i;doc.innerHTML=P;with(c.createOscillator())frequency.value=200*(j+n/k^j),connect(c.destination),start(),stop(n/k)\",k=64)",
            "timeStamp": "2018-05-18T23:51:01Z"
          }
        ]
      }
    ]


    const timelineEventsComponents = timelineEvents.map((timelineEvent) => {
      return (
        <TimelineEvent
        person={timelineEvent.person}
        status={timelineEvent.status}
        timestamp={timelineEvent.timestamp}
        />
      );
    });

    const timelineComponents = timeline.map((timeline) => {
      return (
        <Timeline
        person={timeline.events.person}
        status={timeline.events.status}
        timestamp={timeline.events.timestamp}
        />
      );
    });

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">

      </main>
      {timelineEventsComponents}
      {timelineComponents}
      </div>
    );
  }
}

export default App;
