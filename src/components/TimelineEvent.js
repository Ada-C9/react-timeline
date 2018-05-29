import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person
    const status = this.props.status
    const timestamp = this.props.timeStamp



    return (
      <section className="timeline-event">
        <p className="event-person">{person} </p>
        <p className="event-status">{status} </p>
        <p className="event-time"><Timestamp time = {timestamp} /></p>
      </section>
    );
  }
}

export default TimelineEvent;
