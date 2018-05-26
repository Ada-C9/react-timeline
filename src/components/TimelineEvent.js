import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = this.props.timestamp;

    return (
    <article className="timeline-event">
    <h3 className="event-person">{person}</h3>
    <p className="event-status">{status}</p>
    <p className="event-time"><Timestamp time={timestamp}/></p>
    </article>
  );
  }
}

export default TimelineEvent;
