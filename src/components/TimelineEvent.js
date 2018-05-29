import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const time = <Timestamp time={this.props.time}/>

    return(
      <article className="timeline-event">
      <h3 className="event-person"> {person}</h3>
      <p className="event-status"> {status}</p>
      <p className="event-time"> {time}</p>
      </article>
    );
  }
}

export default TimelineEvent;


// const time = <Timestamp time={Date.now()}/>
