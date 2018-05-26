import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    console.log(this.props.events);
    const eachData = this.props.events.map((event)=>{
     return <TimelineEvent person={event.person} status={event.status} timestamp={event.timeStamp}/>
     });

    return(
      <section class="timeline">
      {eachData}
      </section>
    );
  }
}

export default Timeline;
