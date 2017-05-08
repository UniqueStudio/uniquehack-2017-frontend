import React, {Component} from 'react';
import './hosts.css';

class Hosts extends Component {
  render() {
    const contents = this.props.hosts.map((host, index) => {
      return (<p key={index} className="paragraph">{host}</p>);
    });
    return (
      <section id="host">
        <h2>{this.props.title}</h2>
        {contents}
      </section>
    );
  }
}

Hosts.propTypes = {
  title: React.PropTypes.string,
  hosts: React.PropTypes.array
};

export default Hosts;
