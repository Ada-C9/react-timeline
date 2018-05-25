import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const events = this.props.events;
    let key = 1;
    const eventComponents = events.map((event) => {
      return (
        <section key={event.timeStamp}>
          <TimelineEvent
            person={event.person}
            status={event.status}
            timestamp={event.timeStamp}
          />
        </section>
      );
    },
    key++
  );

    return(
      <section className="timeline">
        {eventComponents}
      </section>
    );
  }
}

export default Timeline;
