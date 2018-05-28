import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const events = this.props.events
    return(
      <article><p>
        {events}
      </p></article>
    );
  }
}

export default Timeline;
