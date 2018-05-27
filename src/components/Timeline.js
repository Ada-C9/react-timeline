import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    console.log(TimelineEvent);

    const events = this.props.events;

    console.log(events);

    const postComponents = events.map((post, index) => {
      // for (let key in post) {
        return <TimelineEvent key={ index } person={post["person"]} status={post["status"]} time={post["timeStamp"]} />
      // }
    });

    return(
      <section>
      <TimelineEvent  />
      {postComponents}
      </section>
    );
  }
}

export default Timeline;
