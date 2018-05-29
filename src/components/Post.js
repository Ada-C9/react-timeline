import React, { Component } from 'react';
import './Post.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;

    return(
        <div class="timeline-event">
          <span class="event-person"><strong>{person}</strong></span>
          <span class="event-time"><Timestamp /></span>
          <p class="event-status">{status}</p>
        </div>
    )
  }
}

export default TimelineEvent;
