import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = this.props.timestamp;


    return (
      <section>
        <ul>
          <li>{ person }</li>
          <li>{ status }</li>
          <li>TimeStamp: { timestamp }</li>
        </ul>
      </section>
    );

  }
}

export default Timeline;
