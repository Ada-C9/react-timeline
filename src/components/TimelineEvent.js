import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const user = this.props.person
    const post = this.props.status
    const timeStamp = this.props.timeStamp
    return(
      <section className="timeline-event">

      <p className="timeline-event:hover">{post}</p>
      <p className="event-person">{user}</p>
      <p className="event-time"><Timestamp time = {timeStamp}/></p>

      </section>
    );
  }
}

export default TimelineEvent;
