import React, {Component} from 'react';
import './map.css';

class Map extends Component {
  render() {
    return (
      <section className="map">
        <h2>{this.props.title}</h2>
        <iframe
          src="https://m.amap.com/navi/?dest=114.43060,30.5090058&destName=%E5%90%AF%E6%98%8E%E5%AD%A6%E9%99%A2&hideRouteIcon=1&key=41e1407037877add1f352c5f41a65780"
        />
        <p className="map-description-zh">
          {this.props.description.zh}
        </p>
        <p className="map-description-en">
          {this.props.description.en}
        </p>
      </section>
    )
  }
}

Map.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.object
};

export default Map;
