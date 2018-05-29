import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {

    return(
      <div className="timeline-event">
        <div className="event-person">{this.props.person}</div>
        <div className="event-status">{this.props.status}</div>
        <div className="event-time"><Timestamp time={this.props.timeStamp} /></div>
      </div>
    )
  };
}

export default TimelineEvent;
