import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    return (
      <article>
        <h3>User: Somebody </h3>
        <p>Status: Some stuff </p>
        <h5>< Timestamp /></h5>
      </article>
    );
  }
}

export default TimelineEvent;
