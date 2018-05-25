import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;

    return (
      <section>
        <p>{person}</p>
        <Timestamp />
        <p>{status}</p>
      </section>
    );
  }
}

export default TimelineEvent;
