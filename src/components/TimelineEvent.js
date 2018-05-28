import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {

  render() {
    return (
      <section className='timeline-event'>
        <div className='event-time'><Timestamp time={this.props.date} /></div>
        <div className='event-status'>{this.props.status}</div>
        <div className='event-person'>By: {this.props.person}</div>


      </section>
  )
  }
}

export default TimelineEvent;
