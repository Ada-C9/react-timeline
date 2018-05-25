import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    // Fill in your code here
    const timelineEvents = this.props.events

    return (
      <section>
        {timelineEvents}
      </section>
    );
  }
}

export default Timeline;
