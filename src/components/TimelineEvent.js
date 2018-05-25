import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const name = this.props.name;
    const status = this.props.status;

    return (
      <article>
        <h3>{name}</h3>
        <p>{status}</p>
        <p><Timestamp /></p>
      </article>
    );
  }
}

export default TimelineEvent;
