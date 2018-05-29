import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    let events = this.props.events;

    const posts = events.map((event) => {

      return (
        <li key={event.person}>

          < TimelineEvent
            person = {event.person}
            status = {event.status}
            timestamp = {event.timestamp}
          />

        </li>
      );
    });
    // Fill in your code here
    return(
      //Why doesn't it work when I make it posts() ?
      posts
    );
  }
}

export default Timeline;
