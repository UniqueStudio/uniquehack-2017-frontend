import React, { Component } from 'react';
import './sponsor.css';

class Sponsor extends Component {
  render() {
    const content = this.props.sponsors.map((sponsor, index) => {
      const goToNewPage = () => {window.location = sponsor.url};
      return (
        <div key={index} className="sponsor-img-wrap">
          <a
            className="sponsor-img"
            title={sponsor.name}
            onTouchEnd={goToNewPage}
            onClick={goToNewPage}
            style={{backgroundImage: `url(${encodeURI(sponsor.imageSrc)})`}}
            href={sponsor.url} />
        </div>
      )}
    );
    return (
      <section className="sponsor">
        <h2>
          {this.props.title}
        </h2>
        <div className="sponsor-content-images">
          {content}
        </div>
      </section>
    );
  }
}
Sponsor.propTypes = {
  title: React.PropTypes.string,
  sponsors: React.PropTypes.array
};
export default Sponsor;
