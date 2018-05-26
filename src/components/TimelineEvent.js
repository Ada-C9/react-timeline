import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // person, status, timestamp
    return <section>
    {this.props.person}
    {this.props.status}
    <Timestamp time = { this.props.timeStamp }/>

    </section>;
  }
}

export default TimelineEvent;
