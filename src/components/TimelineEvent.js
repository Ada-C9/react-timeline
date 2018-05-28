import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {

    const eventPoster = this.props.person;
    const eventStatus = this.props.status;
    const eventTime = this.props.timeStamp;

    return(
      <section class='timeline-event'>
        <p class='event-person'> {eventPoster}</p>
        <p class='event-status'> {eventStatus}</p>
        <p class='event=time'> {eventTime}</p>
      </section>
    );
  }
}

export default TimelineEvent;
