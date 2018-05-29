import React, { Component } from 'react';
import './Post.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = this.props.timeStamp;

    return(
        <article className="timeline-event">
          <span className="event-person"><strong>{person}</strong></span>
          <span className="event-time"><Timestamp time= { timeStamp }/></span>
          <p className="event-status">{status}</p>
        </article>
    )
  }
}

export default TimelineEvent;
