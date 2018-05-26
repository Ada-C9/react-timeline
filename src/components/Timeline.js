import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    console.log(this.props.events);
    const eventList = this.props.events
    const timeLineEvents =  eventList.map((event, index)=>{
      return < TimelineEvent key={index} person={event.person} status={event.status} timeStamp={event.timeStamp}/>
    });
    // Fill in your code here
    return(
      <section>
      {timeLineEvents}
      </section>

    );
  }
}

export default Timeline;
