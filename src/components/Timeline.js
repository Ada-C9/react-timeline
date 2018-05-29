import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    let events = this.prop.events;

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
    return
      posts();
  }
}

export default Timeline;
