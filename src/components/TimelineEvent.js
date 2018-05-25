import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = <Timestamp time={this.props.timeStamp}/>;
    return (
        <article className="timeline-event">
          <p className="event-person">{person}</p>
          <p className="event-time">{timestamp}</p>
          <p className="event-status">{status}</p>
        </article>
    );
  }
}

export default TimelineEvent;
