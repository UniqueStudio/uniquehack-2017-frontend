import React, { Component } from 'react';
import './participator.css';

class Participator extends Component {
  render() {
    const subParts = this.props.subParts.map((part) => {
      return (
        <div
          key={part.title}
          className="sub-participator">
          <h3>{part.title}</h3>
          <p>{part.content}</p>
        </div>
      )
    });
    return (
      <section className="participator">
        <h2>
          {this.props.title}
        </h2>
        <div className="participator-content">
          {subParts}
        </div>
        <div className="clear-float" />
      </section>
    );
  }
}
Participator.propTypes = {
  title: React.PropTypes.string,
  subParts: React.PropTypes.array
};
export default Participator;
