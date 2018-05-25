import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    return (
      <TimelineEvent
        person="Zheng"
        status="programming"
      />
    );
  }
}

export default Timeline;
