import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    const person = this.props.person;
    const status = this.props.status
    const timestamp = this.props.timestamp;

    return(
      <article>
        <h3>Person: {person}</h3>
        <p>Status: {status}</p>
        <p><Timestamp time={timestamp}/></p>
      </article>
    );
  }
}

export default TimelineEvent;
