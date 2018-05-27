import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const eventData = this.props.events;

    return (
      <section>
      {eventData}
      </section>
    );
  }
}

export default Timeline;
