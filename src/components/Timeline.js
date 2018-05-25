import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const events = this.props.events;
    const timelineEvents = events.map((timelineEvent) =>{
          return (
            <TimelineEvent
              key = {timelineEvent.timeStamp}
              eventData = {timelineEvent}
            />
          );
        });

    return(
      <article className = "timeline">
        {timelineEvents}
      </article>
    );
  }
}

export default Timeline;

// The Timeline component will take one prop, (events, an array of JavaScript objects). The render function will use the array to render a set of TimelineEvent components.
//
// Then read in the /src/data/timeline.json file into an array of objects in /src/App.js. In the render function of the App component, render a TimeLine component using the array of objects as the events prop.
