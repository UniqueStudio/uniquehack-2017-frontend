import React, {Component} from 'react';
import './talk-intro.css';

class TalkIntro extends Component {
  render() {
    const content = this.props.contents.map((par, index) => (
      <p
        key={index}
        className="paragraph">{par}</p>
    ));
    return (
      <section className="talk-intro">
        <div className="talk-wrap-mid">
          <h2>{this.props.title}</h2>
          {content}
          <a href={this.props.url.link}>{this.props.url.name}</a>
          <div className="talk-wrap-in" />
          <div className="talk-wrap-out" />
        </div>
      </section>
    );
  }
}
TalkIntro.propTypes = {
  title: React.PropTypes.string,
  contents: React.PropTypes.array,
  url: React.PropTypes.object
};
export default TalkIntro;
