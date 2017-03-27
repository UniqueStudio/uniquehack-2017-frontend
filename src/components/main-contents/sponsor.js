import React, {Component} from 'react';

class Sponsor extends Component {
  render() {
    return (
      <section
        id="sponsor"
        className="hosts">
        <h2>{this.props.title}</h2>
      </section>
    );
  }
}

Sponsor.propTypes = {
  title: React.PropTypes.string,
  // questions: React.PropTypes.array
};

export default Sponsor;
