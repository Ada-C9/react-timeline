import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends Component {
  render() {
    // Fill in your code here
		let person = this.props.person;
    let status = this.props.status;
		let time = < Timestamp />;

    return(
			<section className="event">
			  <div className="top">
          <span>{ person }</span>
					<span className="time-stamp">{ time }</span>
				</div>
				<div className="bottom">
          { status }
				</div>
			</section>
		);
  }
}

export default TimelineEvent;
