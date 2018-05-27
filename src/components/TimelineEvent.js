import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = this.props.timeStamp;

    return (
      <section className="timeline-event">

      <p className="event-person"><strong> Name: </strong> { person }</p>
      <p className="event-status"><strong> Status: </strong> { status }</p>
      <p className="event-time">< Timestamp time = { timeStamp } /> </p>

      </section>

    );
  }

}

export default TimelineEvent;
