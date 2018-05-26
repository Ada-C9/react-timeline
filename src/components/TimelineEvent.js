import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const eventAuthor = this.props.person;
    const eventStatus = this.props.status;
    const eventTime = <Timestamp time={this.props.timeStamp} />;
    return (
      <article className="timeline-event">
        <p className="event-person">{eventAuthor}</p>
        <p className="event-time">TIME: {eventTime}</p>
        <p className="event-status">STATUS: {eventStatus}</p>
      </article>
    );
  }
}

export default TimelineEvent;
