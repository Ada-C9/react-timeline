import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import data from '../data/timeline.json';

class Timeline extends React.Component {
  render() {
    // Fill in your code here
    const events = data.events;

        const timelineEventcomponents = events.map((event) => {
          return(
            <TimelineEvent
            key={event.timestamp}
            person={event.person}
            status={event.status}
            timestamp ={event.timestamp}
            />

          );
        });
        return(
          <div>{timelineEventcomponents}</div>
        );
    }
  }



export default Timeline;
