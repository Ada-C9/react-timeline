import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    
    return(
      <div>
        <p>{this.props.person}</p>
        <p>{this.props.status}</p>
        <p><Timestamp time={this.props.timeStamp} /></p>
        <br />
      </div>
    )
  };
}

export default TimelineEvent;
