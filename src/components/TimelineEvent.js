import React, { Component } from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

class TimelineEvent extends React.Component {
  render() {
    return (
    <div>
       <p>Brittany</p>
       <p>Should be Sleeping</p>
       <p><Timestamp /></p>
       </div>

   );
 }
}


export default TimelineEvent;
