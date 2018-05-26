import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const timeStamp = this.props.timeStamp;
    const status = this.props.status;

    return (
      <section className="timeline-event">
        <p className="event-person">{person}</p>
        <Timestamp
          time={timeStamp.time}
        />
        <p className="event-status">{status}</p>
      </section>
    );
  }
}

export default TimelineEvent;
