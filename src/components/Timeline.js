import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const events = this.props.events

    const tweets = events.map((event) => {
        return (
          <li>
            <TimelineEvent name={event.person} timestamp={event.timeStamp} status={event.status} />
          </li>
        );
      });

    return(
      <ul>
        {tweets}
      </ul>
    )
  }
}

export default Timeline;
