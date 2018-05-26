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
      <section class="timeline-event">
        <p class="event-person">{person} </p>
        <p class="event-status">{status} </p>
        <p class="event-time"><Timestamp time = {timestamp} /></p>
      </section>
    );
  }
}

export default TimelineEvent;
