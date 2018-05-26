import React, { Component } from 'react';

class Counter extends Component {
  state = {
    seconds: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 })
    }, 1000)
  }

  render() {
    return <h1>It has been {this.state.seconds} seconds since you arrived here.</h1>;
  }
}

export default Counter;
