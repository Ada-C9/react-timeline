import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timestamp = this.props.timestamp;
    return(
      <div className="timeline">
        <h4>{ person }</h4>
        <span><Timestamp time={ timestamp } /></span>
        <p>{ status }</p>
      </div>
    );
  }
}

export default TimelineEvent;
