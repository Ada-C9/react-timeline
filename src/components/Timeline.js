import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    // Fill in your code here
    const eventsData = this.props.data;
    console.log(eventsData);



    let timeLine = eventsData.map((events, index) => {
    return <TimelineEvent key={index} person={events.person} status={events.status} time={events.time} />;
    });
    return(
    <div> {timeLine}</div>
  );
  }
}

export default Timeline;
