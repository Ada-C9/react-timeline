import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


class Timeline extends React.Component {
  render() {

    const events = this.props.events
    console.log(events);
    const timelineEventFeed = "puppies!"
    // const timelineEventFeed = events.map((event) => {
    //   return (
    //     <TimelineEvent
    //       key={event.person}
    //       person={event.person}
    //       status={event.status}
    //       timestamp={event.timestamp}
    //       />
    //     );
    // });

    return (
      {timelineEventFeed}
    );
  }
}

export default Timeline;
