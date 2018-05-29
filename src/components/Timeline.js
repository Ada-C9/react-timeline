import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    const post = posts.map((post) => {

      return (
        <li key={post.person}>

          < TimelineEvent
            person = {post.person}
            status = {post.status}
            timestamp = {post.timestamp}
          />

        </li>
      );
    });
    // Fill in your code here
    return

    ;
  }
}

export default Timeline;
