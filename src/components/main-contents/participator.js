import React, { Component } from 'react';
import './participator.css';

class Participator extends Component {
  render() {
    const content = this.props.contents.map((par, index) => (
      <p
        key={index}
        className="paragraph">{par}</p>
    ));
    return (
      <section className="participator">
        <h2>
          {this.props.title}
        </h2>
        {content}
      </section>
    );
  }
}
Participator.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.array
};
export default Participator;
