import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timestamp =(<Timestamp time = { this.props.timestamp }/>);

    return(
      <section className="timeline-event">

        <p className="event-person"> { person } </p>
          <p className="event-status"> { status } </p>
          <p className="event-time"> { timestamp } </p>

      </section>
    );

  }
}

export default TimelineEvent;
