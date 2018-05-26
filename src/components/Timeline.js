import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    let eventData = this.props.events

    return (
      <section className="timeline">
        {eventData}
      </section>
    );
  }
}

export default Timeline;
