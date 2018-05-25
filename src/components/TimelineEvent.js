import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = <Timestamp time={this.props.timestamp} />;

    return(
      <section className="timeline-event">
        <h3 className="event-person">{person}</h3><p className="event-time">{timestamp}</p>
        <p className="event-status">{status}</p>
      </section>
    );
  }
}

export default TimelineEvent;
