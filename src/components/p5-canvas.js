import React, {Component} from 'react';
import P5 from 'p5';
import 'p5/lib/addons/p5.dom'

const sketch = function(p) {
  let canvas;
  let x = 100;
  const y = 100;
  const caseFunctions = ['toUpperCase', 'toUpperCase', 'toUpperCase', 'toUpperCase', 'toUpperCase', 'toLowerCase'];
  const leetReplacement = {
    A: [ 4, '@' ],
    C: [ '¢' ],
    E: [ 3, '€', '£' ],
    G: [ 6 ],
    H: [ '#' ],
    I: [ 1 ],
    O: [ 0 ],
    S: [ 5, '$' ],
    T: [ 7 ],
    X: [ '×' ],
    Y: [ '¥' ],
  };
  const accentReplacement = {
    A: [ 'Ă', 'Â', 'ă', 'â' ],
    C: [ 'Ć', 'Č', 'č', 'ć' ],
    D: [ 'đ' ],
    E: [ 'Ê', 'ê' ],
    O: [ 'Ô', 'Ơ', 'ô', 'ơ' ],
    U: [ 'Ư', 'ư' ],
    S: [ 'Š', 'š' ],
    Z: [ 'Ž', 'ž' ]
  };
  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.frameRate(20);
    p.textFont('VT323');
    p.textSize(64);
    p.textAlign('center', 'center');
  };

  p.draw = () => {
    p.blendMode(p.BLEND);
    // background(8, 24, 64);
    // Add to that scanline look, allows some frames to combine.
    p.fill(8, 2, 24);
    p.rect(0, 0, p.width, p.height);

    // Text prep
    // let life = p.random() > 0.6 ? 'LIFE' : 'LIFE'.split('').sort(() => p.round(p.random(-1, 1))).join('');
    // let txt = `UNIQUE x ${life}`
    // let txt = `UNIQUE x HACKDAY AND TALK`
    let txt = `UNIQUE x HACKDAY`
      .toUpperCase()
      .split('')
      .map(n => n[p.random(caseFunctions)]())
      .join('')
      .replace(/\w/g, (match, p1, offset, string) => {
        if(match === 'g') {
          return 'G';
        }
        let possibleMatchCount = p.round(p.random(16, 26));
        let possibleMatches = new Array(possibleMatchCount).fill(match);
        let leet = leetReplacement[match] || [match];
        let accents = accentReplacement[match] || [match];
        let rando = p.random();
        return p.random([
          ...possibleMatches,
          ...(rando > 0.7 ? [ ' ', '_' ] : []),
          ...(rando > 0.5 ? leet : []),
          ...(rando > 0.92 ? accents : [])
        ]);
      });

    const textSize = p.width / 15;
    p.textSize(textSize);
    // console.log(txt)
    let h = p.textSize();
    let w = p.textWidth(txt);

    let count = 7;
    let part = h / count;
    let xOffset = 0;
    let yOffset = p.height / 2 - h / 2;

    p.blendMode(p.ADD);

    p.fill(255);

    p.translate(
      // p.round(p.cos(p.sin(p.frameCount / 10) * p.TAU - p.cos(p.tan(p.frameCount / 4) / 10) * p.TAU)) * 8,
      // p.round(p.sin(p.frameCount) * 16 / 8) * 0.4
      0,
      Math.round(Math.sin(p.frameCount))
    );

    p.text(txt, p.width / 2, p.height / 2);
    // Scanline misses (The main effect)
    for(let i = 0; i < count; i++) {
      canvas.drawingContext.save();

      let y = i * part + yOffset;
      let xShift = p.cos(-p.frameCount * 0.9375 + i) * 100;

      canvas.drawingContext.beginPath();
      canvas.drawingContext.rect(0, y, p.width, part);
      canvas.drawingContext.closePath();
      canvas.drawingContext.clip();

      p.fill(0, 135);
      p.text(txt, p.width / 2 + xShift, p.height / 2);
      p.fill(255, 50);
      p.text(txt, p.width / 2 + xShift, p.height / 2);

      p.fill(255, 60);
      p.text(txt, p.width / 2 + p.round(xShift / 32) * 16, p.height / 2);

      canvas.drawingContext.restore();
    }

    // p.fill(255, 2);
    // for(let i = 0; i < 4; i++) {
    //   p.rect(0, (p.frameCount * (30 + i)) % p.height / 6 * 7, p.width, p.height / 9);
    // }
    // p.fill(255, p.random(8, 12));
    // let rounding = (part * 1.2);
    // let travelingBarHeight = p.height / 6;
    // let travelingBarSpeed = p.frameCount * 2;
    // p.rect(
    //   0, p.round(travelingBarSpeed % travelingBarHeight * 8 / rounding) * rounding - travelingBarHeight,
    //   p.width, travelingBarHeight
    // );
    // let travelingBarY2 = p.round(
    //     (travelingBarSpeed + 6) % travelingBarHeight * 8 / rounding
    //   ) * rounding - travelingBarHeight;
    // let travelingBar2Opacity = p.map(
    //   travelingBarY2,
    //   ...(travelingBarY2 < p.height / 2 ? [ 0, p.height / 2 ] : [ p.height / 2, p.height ]),
    //   0, 1
    // );
    // p.fill(255, p.random(8, 12) * travelingBar2Opacity);
    // p.rect(
    //   0, travelingBarY2,
    //   p.width, travelingBarHeight
    // );
  };
  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }
};
class P5Canvas extends Component {
  componentDidMount() {
    this.canvas = new P5(sketch, this.refs.wrapper)
  }
  componentWillReceiveProps(props, newprops) {
    if( this.canvas.recieveProps ) {
      this.canvas.recieveProps(props, newprops);
    }
  }
  render() {
    return <div ref="wrapper"></div>
  }
}
P5Canvas.propTypes = {
  hidden: React.PropTypes.bool,
  fullPower: React.PropTypes.bool
};

export default P5Canvas;


