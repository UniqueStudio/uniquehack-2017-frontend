import React, {Component} from 'react';
import './hackday-intro.css'

class HackdayIntro extends Component {
  render() {
    const content = this.props.contents.map((par, index) => (
      <p
        key={index}
        className="paragraph">{par}</p>
    ));
    const goToNewPage = () => {window.location = this.props.url.link};
    return (
      <section
        id="intro"
        className="hackday-intro">
        <h2>{this.props.title}</h2>
        {content}
        <a
          href={this.props.url.link}
          onTouchEnd={goToNewPage}
          onClick={goToNewPage}>{this.props.url.name}</a>
      </section>
    );
  }
}
HackdayIntro.propTypes = {
  title: React.PropTypes.string,
  contents: React.PropTypes.array,
  url: React.PropTypes.object
};
export default HackdayIntro;
