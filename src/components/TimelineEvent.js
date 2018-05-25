import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // const id = this.props.id;
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = this.props.time;

    // const timestamp = <Timestamp time={Date.now()} />;

    return (
        <article>
          <h5>{person}</h5>
          <p>{timestamp}</p>
          <p>{status}</p>
        </article>
    );
  }
}

export default TimelineEvent;
