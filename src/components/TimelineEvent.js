import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {

  render() {

    const eventPerson = this.props.person;
    const eventStatus = this.props.status;
    const eventTime = <Timestamp time={this.props.time} />;

    return (
      <section className='timeline-event'>
        <div className='event-time'>
          { eventTime }
        </div>

        <div className='event-person'>
          { eventPerson }
        </div>

        <div className='event-status'>
          { eventStatus }
        </div>
      </section>
    );
  }
}

export default TimelineEvent;
