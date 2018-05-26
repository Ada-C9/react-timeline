import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    console.log(TimelineEvent);

    const events = this.props.events;

    return(
      <section>
      <TimelineEvent  />
      {events}
      </section>
    );
  }
}

export default Timeline;
