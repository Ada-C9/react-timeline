import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = this.props.timeStamp


    // Should take in 3 props, person, timeStamp and status
    return (

      <div className="timeline-event">
      <p className="event-person">{person}</p>
      <p className="event-status">{status}</p>
      <p className="event-time">{timeStamp}</p>
      </div>

    );
  }
}


export default TimelineEvent;
