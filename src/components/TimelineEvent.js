import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  getDate(timeStamp) {
    let date = '';
    date += timeStamp.split('T');
    return date
  }

  render() {
    <section>
      <div>{TimelineEvent.getDate(this.props.timeStamp)}</div>
      <div>{this.props.status}</div>
      <div>By: {this.props.person}</div>


    </section>
    return;
  }
}

export default TimelineEvent;
