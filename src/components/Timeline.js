import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

	let data = props.data;

	const allData = data.map( (info, index) => {
		return <TimelineEvent key={ index } person={ info.person } status={ info.status } timeStamp={ info.timeStamp }/>;
	});

	return (
		<div className="timeline-container"> { allData }
		</div>
	);

}

export default Timeline;
