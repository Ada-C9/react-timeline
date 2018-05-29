import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person;
    const timeStamp = <Timestamp time={this.props.timeStamp}/>;
    const status = this.props.status;

    return (
      <section>
      <p>{person}<span>{timeStamp}</span></p>

      <p>{status}</p>

      </section>
    );

  }
}

export default TimelineEvent;
