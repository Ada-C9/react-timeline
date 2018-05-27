import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const eventComponents = this.props.data.map((event) => {
      return <TimelineEvent person={ event.person } status={ event.status } timeStamp={ event.timeStamp } />
    });

    return eventComponents;
  }
}

export default Timeline;
