import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    console.log(this);
    // Fill in your code here
    return(
      <div>
        <p>{this.props.person}</p>
        <p>{this.props.status}</p>
        <p>{this.props.timestamp}</p>
      </div>
    )
  };
}

export default TimelineEvent;
