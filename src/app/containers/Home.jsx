import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increase } from 'actions/counter';
import Layout from 'components/layout/Default';

@connect(
  state => ({
    counter: state.counter,
  }),
  { increase }
)

class Home extends Component {
  static propTypes = {
    increase: PropTypes.func,
    counter:  PropTypes.shape({
    count: PropTypes.number,
  }),
  }
  constructor(props) {
    super(props);
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.props.increase();
  }

  render() {
    return (
      <Layout>
        <h2>{this.props.counter.count}</h2>
        <button onClick={this.increaseCounter}>Buttton</button>
      </Layout>
    );
  }
}

export default Home;
