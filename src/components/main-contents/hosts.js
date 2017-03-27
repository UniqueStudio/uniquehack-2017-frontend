import React, {Component} from 'react';

class Hosts extends Component {
  render() {
    return (
      <section className="hosts">
        <h2>{this.props.title}</h2>
      </section>
    );
  }
}

Hosts.propTypes = {
  title: React.PropTypes.string,
  // questions: React.PropTypes.array
};

export default Hosts;
