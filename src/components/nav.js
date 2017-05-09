import React, {Component} from 'react';
import './nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }
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
          className={"link link-wrap link-" +
        (this.props.activeTab === link.link ?
          'active' : 'inactive')}>
          <a
            className="link-a"
            href={link.link}>
            {link.name}
          </a>
        </div>
      );
    });
    return (
      <div
        className={"nav "
        + (this.props.homepage ? 'without-bgc' : 'with-bgc')
        + (this.state.hidden ? ' nav-hidden' : ' nav-not-hidden')
        }
      >
        <img className="logo" src={this.props.logo} alt="logo"/>
        <div
          className="link-wrap nav-close"
          onTouchEnd={() => {
            const hiddenState = !this.state.hidden;
            this.setState({
              hidden: hiddenState
            });
          }}
          onClick={() => {
            const hiddenState = !this.state.hidden;
            this.setState({
              hidden: hiddenState
            });
          }}>
          <div className={
            this.state.hidden ? 'hidden-circle': 'not-hidden-circle'
          }>
          </div>
        </div>
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
