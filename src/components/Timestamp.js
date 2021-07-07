import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Timestamp extends React.Component {
  static propTypes = {
    time: PropTypes.string.isRequired,
  }

  render() {
    const time = moment(this.props.time);
    const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
    const relative = time.fromNow();

    return <span title={absolute}>{relative}</span>;
  }
}

export default Timestamp;
