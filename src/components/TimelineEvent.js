import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person
    const status = this.props.status
    const timestamp = this.props.timeStamp



    return (
      <section>
      <ul>
        <li>{person} </li>
        <li>{status} </li>
        <li><Timestamp time = {timestamp} /></li>
      </ul>
      </section>
    );
  }
}

export default TimelineEvent;
