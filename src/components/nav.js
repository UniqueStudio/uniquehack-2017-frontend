import React, {Component} from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    const links = this.props.links.map((link) => {
      return (
        <div
          key={link.name}
          onTouchEnd={() => {
            this.props.click(link.link)
          }}
          onClick={() => {
            this.props.click(link.link)
          }}
          className={"link-wrap link-" +
        (this.props.activeTab === link.link ?
          'active' : 'inactive')}>
          <a
            href={link.link}>
            {link.name}
          </a>
        </div>
      );
    });
    return (
      <div
        className={"nav " + (this.props.homepage ? 'without-bgc' : 'with-bgc')}
      >
        <img className="logo" src={this.props.logo} />
        <div className="links">
          {links}
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  logo: React.PropTypes.string,
  click: React.PropTypes.func,
  activeTab: React.PropTypes.string,
  homepage: React.PropTypes.bool,
  links: React.PropTypes.array
};

export default Nav;
