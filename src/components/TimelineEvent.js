import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // const id = this.props.id;
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = <Timestamp time={this.props.status}/>;

    // const timestamp = <Timestamp time={Date.now()} />;

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
