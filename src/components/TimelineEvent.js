import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    const { person, status, timestamp } = this.props

    return (
      <article className="timeline-event">
        <div className="event-person">
          {person}
        </div>
        <div className="event-time">
          <Timestamp time={timestamp} />
        </div>
        <p className="event-status">
          {status}
        </p>
      </article>
    );
  }
}

export default TimelineEvent;
