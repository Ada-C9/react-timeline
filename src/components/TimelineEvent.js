import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    // Fill in your code here
		let person = this.props.person;
    let status = this.props.status;
		let timeStamp = this.props.timeStamp;

    return(
			<section className="timeline-event">
        <span className="event-person">{ person }</span>
				<span className="event-time"><Timestamp time={ timeStamp }/></span>
		  	<div className="event-status">
        { status }
			  </div>
			</section>
		);
  }
}

export default TimelineEvent;
