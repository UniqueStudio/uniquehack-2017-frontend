import React, {Component} from 'react';
import P5Canvas from './p5-canvas';
import './homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div
        id="homepage"
        className={"homepage " + (this.props.hidden ? 'hidden' : 'shown')}
      >
        {this.props.hidden}
        {this.props.fullPower}
        <P5Canvas
          {...this.props}
        />
      </div>
    );
  }
}
Homepage.propTypes = {
  hidden: React.PropTypes.bool,
  fullPower: React.PropTypes.bool
};

export default Homepage;
