import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {

  render() {

    const timelineEventPerson = this.props.person
    const timelineEventStatus = this.props.status
    const timelineEventTimestamp = this.props.timestamp

    return (
      <article>
      <h3> {timelineEventPerson} </h3>
      <p> {timelineEventStatus} </p>
      <p> {timelineEventTimestamp} </p>
      </article>
    )

  }
}

export default TimelineEvent;
