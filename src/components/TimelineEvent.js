import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = this.props.timestamp;

    return(
      <div>
        <h3>{person}</h3>
        <p>{status}</p>
        <p>{timestamp}</p>
      </div>
    );
  }
}

export default TimelineEvent;
