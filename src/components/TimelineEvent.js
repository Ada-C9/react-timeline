import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {

    const eventPoster = this.props.person;
    const eventStatus = this.props.status;
    const eventTime = this.props.timeStamp;
    const dt = new Date();
    const day = dt.getDate();
    let test = console.log(dt);

    return(

      <section class='timeline-event'>
        {test}
        <p class='event-person'> {eventPoster}</p>
        <p class='event-status'> {eventStatus}</p>
        <p class='event-time'><Timestamp time={eventTime}></Timestamp></p>
      </section>
    );
  }
}

export default TimelineEvent;
