import React, { Component } from 'react';

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h5>Using Class Components</h5>
        <button onClick={this.handleClick}>Counter {this.state.count}</button>
      </div>
    );
  }
}

export default Counters;
