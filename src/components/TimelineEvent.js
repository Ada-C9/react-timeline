import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const eventAuthor = this.props.person;
    const eventStatus = this.props.status;
    const eventTime = this.props.timestamp;
    return (
      <article>
        <h3>{eventAuthor}</h3>
        <p>TIME: {eventTime}</p>
        <p>STATUS: {eventStatus}</p>
      </article>
    );
  }
}

export default TimelineEvent;
