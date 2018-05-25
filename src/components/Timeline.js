import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const eventsList = this.props.eventsList;

    const eventsComponents = eventsList.map((oneEvent) => {
      return (
        <TimelineEvent
          person={oneEvent.person}
          status={oneEvent.status}
          time={oneEvent.timeStamp}
        />
      );
    });
    return(
      <section className="timeline">{eventsComponents}</section>
    );
  }
}

export default Timeline;
