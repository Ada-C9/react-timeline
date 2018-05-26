import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = this.props.timeStamp;

    return (
      <section>
      <ul>
      <li>Name: { person }</li>
      <li>Status: { status }</li>
      <li>Time: { timeStamp }</li>
      </ul>
      </section>
    );
  }

}

export default TimelineEvent;
