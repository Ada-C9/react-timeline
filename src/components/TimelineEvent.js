import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = this.props.timestamp;

    return (
    <article className="feedcontainer">
    <h3>{person}</h3>
    <p>{status}</p>
    <p>{timestamp}</p>
    </article>
  );
  }
}

export default TimelineEvent;
