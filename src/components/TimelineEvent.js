import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = this.props.timeStamp;

    return (
      <section className="post">
        <h2 className="user-name">{person}</h2>
        <article className="status">{status}</article>
        <span className="timestamp"><Timestamp time={timeStamp} /></span>
      </section>
    );
  }
}

export default TimelineEvent;
