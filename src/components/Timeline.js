import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const eventComponent = this.props.data.map((thing) => {
      return <TimelineEvent person={ thing.person } status={ thing.status } timeStamp={ thing.timeStamp } />
    });

    return (
      [eventComponent]
    );
  }
}

export default Timeline;
