import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  getDate(timeStamp) {
    let date = '';
    date = timeStamp.split('T');
    return date[0]
  }

  render() {
    return (
      <section className='timeline-event'>
        <div className='event-time'>{this.getDate(this.props.date)}</div>
        <div className='event-status'>{this.props.status}</div>
        <div className='event-person'>By: {this.props.person}</div>


      </section>
  )
  }
}

export default TimelineEvent;
