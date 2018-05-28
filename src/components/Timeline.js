import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const events = this.props.events;

    const eventsList = events.map((event, index) => {
      return <TimelineEvent key={ index } person={ event.person } status={ event.status } timeStamp={ event.timeStamp } />
    });

    return(
      <section class='timeline'>
        { eventsList }
      </section>
    );
  }
}

export default Timeline;
