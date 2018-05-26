import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    const user = this.props.person
    const post = this.props.status
    const timeStamp = this.props.timeStamp
    return(
      <section>
      <p>{post}</p>
      <ul>
      <li>{user}</li>
      <li>{timeStamp}</li>
      </ul>
      </section>
    );
  }
}

export default TimelineEvent;
