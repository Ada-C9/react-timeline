import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const timelinePerson = this.props.person;
    const timelineStatus = this.props.status;
    const timelineTimeStamp = < Timestamp />
    return (
      <article>
        <h3>User: {timelinePerson}</h3>
        <p>Status: {timelineStatus}</p>
        <h5>Posted at: {timelineTimeStamp}</h5>
      </article>
    );
  }
}

export default TimelineEvent;
