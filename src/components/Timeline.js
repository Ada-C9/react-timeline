import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


class Timeline extends React.Component {

  render() {
    const events = this.props.events;

    const timelineEvents = events.map((event) => {
      return (
        <TimelineEvent
          key = {event.person}
          person = {event.person}
          status = {event.status}
          timestamp = {event.timeStamp}
        />
      );
    });
    return(
      <section className="timeline">
        {timelineEvents}
      </section>
    );
  }
}

export default Timeline;
