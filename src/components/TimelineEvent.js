import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = this.props.timeStamp;

    return (
      <section class="timeline-event">

      <p class="event-person"><strong> Name: </strong> { person }</p>
      <p class="event-status"><strong> Status: </strong> { status }</p>
      <p class="event-time">< Timestamp time = { timeStamp } /> </p>

      </section>

    );
  }

}

export default TimelineEvent;
