import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const eventsData = this.props.events;
    const eventsComponents = eventsData.map((event, index) => {
      return <TimelineEvent key={ index } person={ event.person } status={ event.status } time={ event.time } />
    });

    return (
      <section>
        { eventsComponents }
      </section>
    );
  }
}

export default Timeline;
