import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


class Timeline extends React.Component {

  render() {
    let events = this.props.events;

    const timelineEvents = events.map((event) => {
      return (
        <section key={event.person}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timestamp={event.timeStamp}
        />
        </section>
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
