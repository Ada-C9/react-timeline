import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {

    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = <Timestamp time ={ this.props.timeStamp } />;

    return (
      <section className="timeline-event">
      <div className="event-person">{person}</div>
      <div className="event-status">{status}</div>
      <div className="event-time">{timeStamp}</div>
      </section>
    );
  }
}

export default TimelineEvent;
