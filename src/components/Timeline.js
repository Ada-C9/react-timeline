import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    console.log(TimelineEvent);

    const postList = this.props.eventsList

    const postComponents = postList.map((post, index) => {
      return <TimelineEvent key={ index } person={post.person} status={post.status} time={post.timeStamp} />
    });

    return(
      <div className="timeline">
      {postComponents}
      </div>
    );
  }
}

export default Timeline;
