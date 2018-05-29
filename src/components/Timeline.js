import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const events = this.props.events

    const postsComponents = events.map((post) => {
      return (
        <li key={post.person}>
          <TimelineEvent
            person={post.person}
            status={post.status}
            timestamp={post.timestamp}
          />
        </li>
      );
    });

    return(
      <article><p>
        {postsComponents}
      </p></article>
    );
  }
}

export default Timeline;
