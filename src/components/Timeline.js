import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


class Timeline extends React.Component {
  render() {
    const events = this.props.events

    const timelineComponents = events.map((event) => {
      return (
        <TimelineEvent
          key={event.person}
          name={event.person}
          status={event.status}
          time={event.timeStamp}
        />
      );
    })

    return (
      <div className="timeline">
        {timelineComponents}
      </div>
    );
  }
}

export default Timeline;
