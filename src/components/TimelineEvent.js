import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    console.log(Timestamp);

    const postPerson = this.props.person;
    const postStatus = this.props.status;
    const postTimestamp = this.props.time;

    return(
      <div className="timeline-event">
        <p className="event-person">
          {postPerson}
        </p>
        <p className="event-status">
          {postStatus}
        </p>
        <p className="event-time"><Timestamp time=
          {postTimestamp} />
        </p>
      </div>
    );
  }
}

export default TimelineEvent;
