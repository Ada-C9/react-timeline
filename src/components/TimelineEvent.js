import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render () {
    const name = this.props.name;
    const status = this.props.status;
    const timestamp = this.props.timestamp;

    return (
      <section>
        <span>{name}</span>
        <span className="time">{timestamp}</span>
        <p>{status}</p>
      </section>
    );
  }

}

export default TimelineEvent;
