import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    return(
      <div class="timeline-event">
      <p class="event-person">{this.props.person}</p>
      <p class="event-status">{this.props.status}</p>
      <p class="event-time"><Timestamp time={this.props.timestamp}/></p>
      </div>
    );
  }
}

export default TimelineEvent;
