import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    let eventData = this.props.events

    return (
      <div className="timeline">
        {eventData}
      </div>
    );
  }
}

export default Timeline;
