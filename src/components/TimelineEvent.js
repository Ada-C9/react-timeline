import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const timelinePerson = this.props.person;
    const timelineStatus = this.props.status;
    const timelineTimeStamp = this.props.timestamp
    return (
      <article>
        <h3>User: {timelinePerson}</h3>
        <h5>{timelineTimeStamp}</h5>
        <p>Status: {timelineStatus}</p>
      </article>
    );
  }
}

export default TimelineEvent;
