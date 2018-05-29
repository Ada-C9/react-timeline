import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.person;
    const status = this.props.status;
    const timeStamp = <Timestamp time = {this.props.timeStamp}/>

    return(
      <article className="user-post">
        <h3>{person}</h3>
        <h4>{timeStamp}</h4>
        <p>{status}</p>
      </article>
    );

  }
}

export default TimelineEvent;
