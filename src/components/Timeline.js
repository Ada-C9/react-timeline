import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


class Timeline extends Component {
  render() {
    const timelineEvents = this.props.events
    console.log(timelineEvents);
    const timelineData = timelineEvents.map((event, index) => {
      return <TimelineEvent key={index} person={event.person} status={event.status} timeStamp={event.timeStamp} />;
    });
    return (
      <section class="main-timeline">{ timelineData }</section>
    );
  }
}

export default Timeline;
