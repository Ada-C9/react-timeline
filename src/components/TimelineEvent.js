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
			<section className="event">
			  <div className="top">
          <span>{ person }</span>
					<span><Timestamp time={ timeStamp }/></span>
				</div>
				<div className="bottom">
          { status }
				</div>
			</section>
		);
  }
}

export default TimelineEvent;
