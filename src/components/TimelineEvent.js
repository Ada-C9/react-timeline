import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    console.log(person);
    const status = this.props.status;
    const timeStamp = <Timestamp time = { this.props.timeStamp }/>;

    return (
      <section class='timeline-event'>
      <p class='event-person'>{ person }</p>
      <p class='event-status'>{ status }</p>
      <p class='event-time'>{ timeStamp }</p>
      </section>
    );
  }
}

export default TimelineEvent;
