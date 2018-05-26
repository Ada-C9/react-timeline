import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    let person = this.props.person
    let status = this.props.status
    let timeStamp = this.props.timeStamp


    return (
      <section className="timeline-event">
        <div className="event-person">{ person }</div>

        <div className="event-status">{ status}</div>

        <div className="event-time"><Timestamp time={ timeStamp }></Timestamp>
        </div>


      </section>
    );
  }
}

export default TimelineEvent;
