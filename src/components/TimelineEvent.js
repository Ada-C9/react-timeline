import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {

    const person = this.props.eventData.person;
    const status = this.props.eventData.status;
    const eventTime = this.props.eventData.timeStamp;
    // this.props.studentData.age;

    return(
      <article>
        <p>{person}</p>
        <p>{status}</p>
        <Timestamp time = {eventTime} />
      </article>
    );
  }
}

export default TimelineEvent;
