import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person
    const status = this.props.status
    const time = <Timestamp time={this.props.time} />;

    return (

      <article className="timeline-event">
      <h3 className="event-person">{person}</h3>
      <p className="event-status">Status: {status}</p>
      <p className="event-time">Time: {time}</p>
      </article>
    );
  }
}

export default TimelineEvent;
