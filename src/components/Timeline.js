import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    // Fill in your code here
    const eventsData = this.props.data;
    console.log('cake', eventsData);


    let timeLine = eventsData.events.map((eventx, index) => {
    return <TimelineEvent key={index} eventPerson={eventx.person} eventStatus={eventx.status} eventTime={eventx.time} />;
    });

    return(
    
    <div> {timeLine}</div>

  );
  }
}

export default Timeline;
