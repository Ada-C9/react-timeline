import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
	render() {
		// Fill in your code here
		fetch('./data/timeline.json')
		.then((response) => {
			console.log('response: ' + response);
		})
		.then((data) => {
			console.log('data: ' + data);
		});
		return(
			<section>
				<TimelineEvent person="Adele Goldberg" status="In Smalltalk, everything happens somewhere else." timeStamp='2018-05-18T22:12:03Z' />
			</section>
		);
	}
}

export default Timeline;
