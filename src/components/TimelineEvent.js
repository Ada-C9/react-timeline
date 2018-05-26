import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.eventPerson
    const status = this.props.eventStatus
    const timeProperty = this.props.eventTime
    const timeElement = <Timestamp time ={timeProperty} />
    return( <section> {person} {status} {timeElement}</section>);
  }
}

export default TimelineEvent;
