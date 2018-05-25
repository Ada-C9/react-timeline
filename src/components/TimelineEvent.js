import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const name = this.props.name;
    const status = this.props.status;
    const time = this.props.time;

    return (
      <article className="timeline-event">
        <h3 className="event-person">{name}</h3>
        <p className="event-status">{status}</p>
        <p className="event-time">
        <Timestamp
          time={time}
        />
        </p>
      </article>
    );
  }
}

export default TimelineEvent;
