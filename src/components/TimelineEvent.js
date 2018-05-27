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
        <p class='event-person'>Poster: {eventPoster}</p>
        <p class='event-status'>Status: {eventStatus}</p>
        <p class='event=time'>Time: {eventTime}</p>
      </section>
    );
  }
}

export default TimelineEvent;
