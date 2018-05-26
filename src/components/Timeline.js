import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

class Timeline extends React.Component {

  render() {

    let jsonEvents = this.props.events;

    const getEvents = (events) => {
      return events.map((article, index) => {
        return <TimelineEvent key={index} person={article.person} status={article.status} date={article.timeStamp} />
      });
    };

    return (
      <section className='timeline'>
        {getEvents(jsonEvents)}
      </section>
    );
  }
}

export default Timeline;
