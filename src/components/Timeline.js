import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const events = this.props.events

    const timelineEvents = events.map((e) => {
      console.log(e.timeStamp);
      return (
      <TimelineEvent
        key={e.timeStamp}
        person={e.person}
        status={e.status}
        time={e.timeStamp}
        />
      )
    })

    return (
      <article className="timeline">
      {timelineEvents}
      </article>
    )
  }
}

export default Timeline;
