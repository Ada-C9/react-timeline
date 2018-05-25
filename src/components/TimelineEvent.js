import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

//individual Timeline Events
//person, status message, timestamp (already a component)
//wave 1 just put in hardcoded data

class TimelineEvent extends React.Component {
  render() {
    let person = this.props.person
    let status = this.props.status
    let timeStamp = this.props.timeStamp

    return (
      <section class="timeline-event">
        <strong class="event-person">{ person }</strong>
        <br/>
        <strong class="event-status">{ status}</strong>
        <br/>
        <strong class="event-time">{ timeStamp }</strong>
        <br/>
      </section>
    );
  }
}

export default TimelineEvent;
