import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person;
    const timeStamp = <Timestamp time={this.props.timeStamp}/>;
    const status = this.props.status;

    return (
      <section className="timeline-event">
      <p className="event-person">{person}</p><span>{timeStamp}</span>

      <p className="event-status">{status}</p>

      </section>
    );

  }
}

export default TimelineEvent;
