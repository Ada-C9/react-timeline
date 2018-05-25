import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const events = this.props.events;

    const eventComponents = events.map((event) => {
      return(
        <TimelineEvent
        key={event.timeStamp}
        person={event.person}
        status={event.status}
        time={event.timeStamp}
        />
      );
    });

    return(
      <article>
      {eventComponents}
      </article>
    );
  }
}

export default Timeline;
