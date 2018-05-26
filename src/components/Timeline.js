import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
// import timelineData from './data/timeline.json';

class Timeline extends Component {
	render() {

		let data = this.props.data;

		const allData = data.map( (info, index) => {
			return <TimelineEvent key={ index } person={ info.person } status={ info.status } time={ info.time }/>;
		});

		return (
			<div className="timeline-container"> { allData }
			</div>
		);
	}
}

export default Timeline;
