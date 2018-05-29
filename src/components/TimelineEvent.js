import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    return(
      <div>
        <big> {this.props.person}</big>
        <time id="rightSide">< Timestamp time = {this.props.timestamp}/></time>
        <p>{this.props.status}</p>
      </div>
    );
  }
}

export default TimelineEvent;
