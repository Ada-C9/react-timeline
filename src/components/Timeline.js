import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {

  render() {
    const timeline = this.props.timeline

    const timelineEvents = timeline.events.map((event) => {
      return (
        <TimelineEvent
          key={event.timeStamp}
          person={event.person}
          status={event.status}
          timestamp={event.timeStamp}
        />
      );
    });

    return (
      <div className="timeline">{timelineEvents}</div>
    );
  }
}

export default Timeline;
