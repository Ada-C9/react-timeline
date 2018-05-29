import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    // Fill in your code here

    //this should just take in the content of events json
    //1. expect an array of events - require in the component

    //2. generate an array of events in the App.js and feed
    //2 b. push array of events into the Timeline component (App.js) and display(render())
    let events = this.props.events;


    const allPosts = events.map((singlePost) => {
      return (
        //anytime you have an array of JSX you need a key associated with the element.
         <TimelineEvent
            key={singlePost.timeStamp}
            person={singlePost.person}
            status={singlePost.status}
            timeStamp={singlePost.timeStamp}
              />
      );
    });
    return(
        allPosts
    );
  }
}

export default Timeline;
