import React, {Component} from 'react';
import './prize.css';

class Prize extends Component {
  render() {
    const prizes = this.props.prizes.map((prize, index) => (
      <div key={index} className='single-prize'>
        <p className='prize-name'>{prize.name}</p>
        <p className='prize-content'>{prize.content}</p>
      </div>
    ));
    const bgStyle = {
      background: 'url(http://hackday-1251917016.costj.myqcloud.com/asserts/prize-bg.png)'
    };
    return (
      <section
        id="prize"
        style={bgStyle}
        className="prize">
        <h2>{this.props.title}</h2>
        <div className="prize-left">
          <div className="prize-slider-box" />
          {prizes}
        </div>
      </section>
    );
  }
}

Prize.propTypes = {
  title: React.PropTypes.string,
  prizes: React.PropTypes.array
};

export default Prize;
