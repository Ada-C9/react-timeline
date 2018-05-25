import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = this.props.timeStamp;

    return (
      <section>
      { person }
      { status }
      { timeStamp }
      </section>
    );
  }
}

export default TimelineEvent;
