import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends Component {
  render() {
    // Fill in your code here
    let events = this.props.events;

    const timelineEvents = events.map((event) => {
      return (
        <TimelineEvent
          key = {event.timeStamp}
          person = {event.person}
          status = {event.status}
          timestamp = {event.timeStamp}
        />
      );
    });

    return(
      <div>
        { timelineEvents }
      </div>
    );
  }
}

export default Timeline;
