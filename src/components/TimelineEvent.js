import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    return(
      <div>
        <h3>person: {this.props.person}</h3>
        <p>status: {this.props.status}</p>
        <p>timestamp: <Timestamp time = {this.props.timestamp}/></p>
      </div>
    );
  }
}

export default TimelineEvent;
