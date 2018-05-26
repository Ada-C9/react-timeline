import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {
  render() {

        const timeLineObjects = this.props.events;

        console.log(timeLineObjects);

        const objectsMap = timeLineObjects.map((object, index) => {
          return <TimelineEvent key={index} person={ object.person } status={ object.status } time={ object.timeStamp } />
        });

        console.log(objectsMap);

    return(
      <section> {objectsMap} </section>
    );

  }
}

export default Timeline;
