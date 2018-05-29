import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const eventComponents = this.props.events.map((event, index) => {
      return <TimelineEvent key={index} person={event.person} status={event.status} timestamp= {event.timestamp}/>
    })
    return (
    eventComponents
    )
  }
}

export default Timeline;
