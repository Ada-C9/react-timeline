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
      <section>
        <div>{this.getDate(this.props.date)}</div>
        <div>{this.props.status}</div>
        <div>By: {this.props.person}</div>


      </section>
  )
  }
}

export default TimelineEvent;
