import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const component = this.props.timelineComponent;
    console.log(component.events);
    const timelineEvents = component.events.map((event) => {
      return <TimelineEvent person = { event.person } status = {event.status} timeStamp = {event.timeStamp}/>
    });


    return <div class='timeline'> { timelineEvents } </div>;
  }
}

export default Timeline;
