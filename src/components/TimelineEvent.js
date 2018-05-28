import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    // Fill in your code here
    const person = this.props.eventPerson
    const status = this.props.eventStatus
    const timeProperty = this.props.eventTime
    const timeElement = <Timestamp time ={timeProperty} />
    return( <section>
                  <aside id="postid">
                    <p className="name">
                      {person}
                    </p>
                    <p className="timeElement">
                      {timeElement}
                    </p>
                    </aside>
                    <p className="status">
                      {status}
                    </p>

            </section>);
  }
}

export default TimelineEvent;
