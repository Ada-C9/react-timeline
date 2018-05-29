import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import data from '../data/timeline.json';

class Timeline extends React.Component {
	render() {
		// Fill in your code here
		const person = data.person;
		const posts = data.events;
		console.log(person);
		console.log(posts);
		const postCollection = posts.map((post)=>{
			return <div className='timeline'>
				<TimelineEvent
					person={post.person}
					status={post.status}
					timeStamp={post.timeStamp}
					/>
			</div>
		});
		return(
			<section>

				{postCollection}

			</section>
		);
	}
}

export default Timeline;
