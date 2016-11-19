import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increase } from 'actions/counter';
import Layout from 'components/layout/Default';

@connect(
  state => ({
    count: state.count,
  }),
  { increase }
)

class Home extends Component {
  static propTypes = {
    increase: PropTypes.func,
    count: PropTypes.number,
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
        <h2>{this.props.count}</h2>
        <button onClick={this.increaseCounter}>Buttton</button>
      </Layout>
    );
  }
}

export default Home;
