import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {

    return (
      <section>
        <p>Zheng</p>
        <Timestamp />
        <p>Programming</p>
      </section>
    );
  }
}

export default TimelineEvent;
