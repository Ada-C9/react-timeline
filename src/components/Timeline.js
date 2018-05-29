import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import data from '../data/timeline.json';
// Get data from json file


class Timeline extends React.Component {
  render() {
    // Fill in your code here
    // one prop, events, which will be an array of js objects.
    const events = data.events;
    // render a set of TimelineEvent components
    const timelineEventComponents = events.map((event) => {

      return (
        <TimelineEvent
        key={event.timeStamp}
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
        />
      );
    });
    // Return the Timeline event components/arrays of js objects
    return (
      <div className="timeline">{timelineEventComponents}</div>
    );
  }
}

export default Timeline;
