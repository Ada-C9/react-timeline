import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    // console.log(this.props.data);
    const eventComponent = this.props.data.map((thing) => {
      return <TimelineEvent person={ thing.person } status={ thing.status } timeStamp={ thing.timeStamp } />
    });
    // console.log(eventComponent);

    return (
      [eventComponent]
    );
  }
}

export default Timeline;
