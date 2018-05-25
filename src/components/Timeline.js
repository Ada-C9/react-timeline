import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import data from '../data/timeline'

class Timeline extends React.Component {
  render() {

    const posts = data.events.map((post) => {
      return (
        <TimelineEvent
          key={post.timeStamp}
          person={post.person}
          status={post.status}
          time={post.timeStamp}
        />
      );
    });

    return (
      <section className="timeline">
        {posts}
      </section>
    )
  }
}

export default Timeline;
