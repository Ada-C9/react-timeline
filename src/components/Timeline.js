import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    // Fill in your code here

    const component = this.props.timelineComponent;
    const timelineEvents = component.events.map((event) => {
      return <TimelineEvent person= {event.person} status={event.status} timeStamp={event.timeStamp}/>
    });
    return (
      <div className="timeline">
      {timelineEvents}
      </div>

    );

  }
}

export default Timeline;
