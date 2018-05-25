import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
  const timelinePerson = this.props.timelineData.person;
  const timelineStatus = this.props.timelineData.status;
  const timelineTimestamp = this.props.studentData.timestamp;
  return(
    <article>
      <h3> {this.props.timelineData.person}</h3>
      <p> status: {timelineStatus}</p>
      <p> timestamp: {timelineTimestamp}</p>
    </article>
    );
  }
}
    // Fill in your code here
    return;
  }
}

export default Timeline;
