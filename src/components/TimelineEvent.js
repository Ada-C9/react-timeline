import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = "Name";
    const status = "This is a status.";
    // const timestamp = this.props.time;

    return (
      <article>
        <Timestamp/>
        <h3>{person}</h3>
        <p>{status}</p>
      </article>
    );
  }
}

export default TimelineEvent;
