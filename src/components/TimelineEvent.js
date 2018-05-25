import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const timeStamp = this.props.timeStamp;
    const status = this.props.status;

    return (
      <section>
        <p>{person}</p>
        <p>{timeStamp}</p>
        <p>{status}</p>
      </section>
    );
  }
}

export default TimelineEvent;
