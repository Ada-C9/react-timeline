import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    // const time = <Timestamp time={Date.now()}/>
    const time = this.props.time;
    return(
      <article>
      <h3>Name: {person}</h3>
      <p>status: {status}</p>
      <p>time: {time}</p>
      </article>
    );
  }
}

export default TimelineEvent;
