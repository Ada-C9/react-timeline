import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const events = this.props.events;
    // Fill in your code here
    return (events.map((event) => {
      return (
        <TimelineEvent className="timeline"
        key={event.timeStamp}
        person={event.person}
        status={event.status}
        timestamp={event.timeStamp}
        />
      );
    }));
  }
}

export default Timeline;
