import React, { Component } from 'react';
import './Timeline.css';
import Post from './Post';

class Timeline extends React.Component {
  render() {
    const events = this.props.events;

    const posts = events.map((event)=>{
      return <Post person={event.person} status={event.status} time={event.timeStamp} />;
    });

    return(
      <section className="timeline">
        { posts }
      </section>

    )
  }
}

export default Timeline;
