import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const timelineEvents = this.props.events;
    const timelineData = timelineEvents.map((event) => {
      return <TimelineEvent person={ event.person } status={ event.status } timestamp={ event.timeStamp } />
    });
    return (
      <section>{ timelineData }</section>
    );
  }
}

export default Timeline;
