import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    // Fill in your code here
    console.log(this.props.eventsData);

    const events = this.props.eventsData;

    const eventsComponents = events.map((event, index) => {
      return <TimelineEvent key= {index} person= {event.person} status= {event.status} timeStamp= {event.timeStamp} />
    });

    return (
      <div>
        {eventsComponents}
      </div>
    );


  }
}

export default Timeline;
