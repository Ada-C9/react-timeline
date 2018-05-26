import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {

  render() {
    const name = this.props.person;
    const message = this.props.status;
    const posted = (<Timestamp time={this.props.timeStamp} />);

    return (
      <section className="timeline-event">
          <p className="event-person">{ name }</p>
          <p className="event-time">{ posted }</p>
          <p className="event-status">{ message }</p>
      </section>
    );
  }
}

export default TimelineEvent;
