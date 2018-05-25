import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person
    const status = this.props.status
    const time = < Timestamp />
    return( <section> {person} {status} {time}</section>);
  }
}

export default TimelineEvent;
