import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    return (
      <article>
        <p>{ this.props.person }</p>
        <Timestamp time={ this.props.timestamp } />
        <p>{ this.props.status }</p>
      </article>
    );
  }
}

export default TimelineEvent;
