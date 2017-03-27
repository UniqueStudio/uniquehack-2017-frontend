import React, {Component} from 'react';
import './detail.css';

class Detail extends Component {
  render() {
    return (
      <section className="detail">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </section>
    );
  }
}
Detail.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string
};

export default Detail;
