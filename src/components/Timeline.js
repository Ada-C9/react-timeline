import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {
    console.log(TimelineEvent);

    return(
      <section>
      <TimelineEvent person='Luxi' status='what what what' />
      </section>
    );
  }
}

export default Timeline;
