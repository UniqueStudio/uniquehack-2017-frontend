import React, { Component } from 'react';
import logo from './logo.png';
import Nav from './components/nav';
import Homepage from './components/homepage';
import MainContent from './components/main-content';
import {polyfill} from "smoothscroll-polyfill";
polyfill();
import './App.css';
import 'normalize.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: true,
      activeTab: ''
    };
    this.moving = false;
    this.links = [
      {
        link: '#intro',
        name: '比赛介绍'
      },
      {
        link: '#schedule',
        name: '活动日程'
      },
      {
        link: '#prize',
        name: '奖项设置'
      },
      {
        link: '#questions',
        name: '常见问题'
      },
      {
        link: '#host',
        name: '主办方'
      },
    ];
    this.haveScrollBy = this.haveScrollBy.bind(this);
    this.findActiveTab = this.findActiveTab.bind(this);
  }
  triggerMove() {
    this.moving = true;
    setTimeout(() => {
      this.moving = false;
    }, 400);
  }
  componentWillMount() {
    if (this.haveScrollBy('#intro', 200)) {
      this.setState({
        homepage: false
      });
    }
  }
  haveScrollBy(selector, more=0) {
    const ele = document.querySelector(selector);
    return ele && ((ele.offsetTop - more) <= this.scrollTop);
  }
  findActiveTab() {
    return this.links.reduce((acc, value) => {
      return (this.haveScrollBy(value.link, 200) ? value.link : acc);
    }, null)
  }
  render() {
    return (
      <div
        className="App">
        <Nav
          logo={logo}
          links={this.links}
          activeTab={this.findActiveTab()}
          click={(id) => {
            this.setState({
              homepage: false
            });
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
          }}
          homepage={this.state.homepage}
        />
        <div
          style={{
            height: '100%',
            overflow: 'scroll'
          }}
          onWheel={(e) => {
            if (!this.haveScrollBy('#intro')) {
              if (this.moving) {
                return true;
              } else {
                e.preventDefault();
                this.triggerMove();
                if (e.deltaY > 0) {
                  document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' });
                } else {
                  document.querySelector('#homepage').scrollIntoView({ behavior: 'smooth' });
                }
              }
            }
          }}
          onScroll={(e) => {
            this.scrollTop = e.target.scrollTop;
            const haveScrollByIntro = this.haveScrollBy('#intro', 100);
            if (haveScrollByIntro && this.state.homepage) {
              this.setState({
                homepage: false
              });
            } else if (!haveScrollByIntro && !this.state.homepage) {
              this.setState({
                homepage: true
              });
            }
            this.setState({
              activeTab: this.findActiveTab()
            });
          }}
        >
          <Homepage
            hidden={!this.state.homepage}
          />
          <MainContent />
          <p className="footer">
            Copyright © 2017 Unique Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
