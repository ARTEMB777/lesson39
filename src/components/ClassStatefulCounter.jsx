import React, { Component } from 'react';

class ClassStatefulCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <h1>Class Counter</h1>
        <button onClick={this.increment}>Increment</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ClassStatefulCounter;