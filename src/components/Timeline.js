import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {

  render() {
    console.log(this.props);
    const timeline = this.props.timeline
    // console.log({timeline});

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
