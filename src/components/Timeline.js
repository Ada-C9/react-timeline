import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

    const dunno = this.props.things;
    // const eventComponent = dunno.map((thing) => {
    //   return <TimelineEvent person={ thing.person } status={ thing.status } timestamp={ thing.timestamp } />
    // });



    return (
      [<TimelineEvent person={ dunno[0].person } status={ dunno[0].status } timestamp={ dunno[0].timestamp } />,
      <TimelineEvent person={ dunno[1].person } status={ dunno[1].status } timestamp={ dunno[1].timestamp } />]
    );
  }
}

export default Timeline;
