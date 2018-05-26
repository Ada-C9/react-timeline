import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = this.props.timestamp;


    return(
      <article>
      <p>{person}</p>
      <p> {status}</p>
      <p>{timestamp}</p>
      </article>
    );
  }
}

export default TimelineEvent;
