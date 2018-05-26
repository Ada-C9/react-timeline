import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    const name = this.props.person;
    const message = this.props.status;
    const posted = (<Timestamp time={this.props.timeStamp} />);
    return (
      <section>
        <ul className="timeline-event">
          <li className="event-person">{ name }</li>
          <li className="event-time">{ posted }</li>
          <li className="event-status">{ message }</li>
        </ul>
      </section>
    );
  }
}

export default TimelineEvent;
