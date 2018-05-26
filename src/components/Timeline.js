import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

//something is passed from App to Timeline (JSON??) that will render a list of TimelineEvent components
//wave2 will pass in the json data
//apply the pre-built css classes to the html

class Timeline extends React.Component {
  render() {
    let events = this.props.timelineData
    console.log(events)


    const eventsComponents = events.map((event) => {
      return <TimelineEvent person={ event.person } status={ event.status } timeStamp={ event.timeStamp } />
    });

    return (
      <section class="timeline">
        {eventsComponents}
      </section>
    );
  }
}

export default Timeline;
