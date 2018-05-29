import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const timelineData = this.props.events.map((post) => {
      return (
        <TimelineEvent
        key={post.person}
        person={post.person}
        status={post.status}
        timestamp={post.timeStamp}
        />
      );
    });
    return (
      <section className="timeline">
        {timelineData}
      </section>
    );
  }
}

export default Timeline;
