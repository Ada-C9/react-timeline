import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {

  render() {
    const seedData = this.props.events
    const data = seedData.map((user, index) => {
      return (<TimelineEvent key={index} person={user.person} status={user.status} posted={user.timeStamp} />)
    });

    return (
      <span className="timeline">{data}</span>
    )
  }
}

export default Timeline;
