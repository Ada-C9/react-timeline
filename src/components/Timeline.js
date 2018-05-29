import React, { Component } from 'react';
import './Timeline.css';
import Timestamp from './Timestamp';
import TimelineEvent from './TimelineEvent';


class Timeline extends React.Component {
  render() {
    const events = this.props.events
    const timelineEventFeed = events.map((item) => {
      let itemTimeStamp = <Timestamp
        time= {item.timeStamp}
      />
      return (
        <TimelineEvent
        key={item.person}
        status={item.status}
        timestamp= {itemTimeStamp}
        person={item.person}
        />
      );
    });

    return (
      <ul>
        {timelineEventFeed.map(function(element){
          return <li>{element}</li>;
        })}
      </ul>
    );
  }
}

export default Timeline;
