import React, {Component} from 'react';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClick() {
    const open = !this.state.open;
    this.setState({
      open: open
    });
  }
  render() {
    return (
      <div
        onClick={(e) => this.handleClick()}
        onTouchEnd={() => {
          this.handleClick()
        }}
        className={"question " + (this.state.open ? 'open' : 'close')}>
        <h3>{this.props.name}</h3>
        <p>{this.props.content}</p>
        <div className="triangle-mark" />
      </div>
    );
  }
}

Questions.propTypes = {
  name: React.PropTypes.string,
  content: React.PropTypes.array
};

export default Questions;
