import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => (
	<section className="timeline-event">
    <span className="event-person">{ props.person }</span>
		<span className="event-time"><Timestamp time={ props.timeStamp }/></span>
  	<div className="event-status">
    { props.status }
	  </div>
	</section>
)

export default TimelineEvent;
