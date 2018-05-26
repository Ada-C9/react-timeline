import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    console.log(Timestamp);

    const postPerson = this.props.person;
    const postStatus = this.props.status;
    const postTimestamp = this.props.time;

    return(
      <section>
      <Timestamp />
        <div>
        {postPerson},
        {postStatus},
        {postTimestamp}
        </div>
      </section>
    );
  }
}

export default TimelineEvent;
