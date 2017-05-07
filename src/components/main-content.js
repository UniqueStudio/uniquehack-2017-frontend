import React, {Component} from 'react';

import HackdayIntro from './main-contents/hackday-intro';
import TalkIntro from './main-contents/talk-intro';
import Participator from './main-contents/participator';
import Schedule from './main-contents/schedule';
import Detail from './main-contents/detail'
import Map from './main-contents/map';
import Prize from './main-contents/prize';
import Questions from './main-contents/questions';
import Hosts from './main-contents/hosts';
import Sponsor from './main-contents/sponsor';
import './main-content.css';

import HackdayImage from '../asserts/hackday.png'
import TalkImage from '../asserts/talk.png'

class mainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <HackdayIntro
          title="大赛介绍"
          contents={[
              'Hackday，又称Hackathon 或黑客马拉松，是一项专属于互联网极客们的比赛。一群有创意、有想法的开发者、设计师、产品经理以及任何有技术背景的人聚集在一起，在极短时间内（24 小时）开发出他们的产品。而Unique Hackday ，起源于联创团队内部，为了激发成员开发产品而举办的比赛。随后，前辈们并不满足于局限在自己的圈子内举办比赛，决心将比赛的规模扩大，将开放、创新、极客的精神传递给更多人。',
              '2017年Unique Hackday将于6月3日至4日，在华中科技大学启明学院学术报告厅举行，届时将邀请全国150名优秀的开发者同台竞技，可以自由组成2-4人的团队一同参赛。根据主办方所提供的赛题，在规定的时间内，完成一个独立的产品设计，由业内专家、企业代表共同评分，得出最后名次。',
              '除此之外，在hackday举办的前夕，我们将举办”Unique Talk“前沿技术研讨会，邀请往届获奖队伍、代码大牛和大家共同交流分享。大家可以畅所欲言，和dalao面对面讨论，总结当前的技术与形式，交互新奇的想法，在会议最后选出代表展示自己的想法，分享自己的收获。',
            ]}
          url={{
            link: '#',
            name: '点击报名'
          }}
        />
        <TalkIntro
          title="uniquetalk 介绍"
          contents={[
            'Unique Talk与以往的交流会有所不同，并不是邀请各个公司的高层，也不是高不可攀的海归，而是就在大家身边熟悉的同学。摆脱了以往的陈词滥调，去除了所谓的官话套话，开门就见山，不拘泥于细节。',
            '研讨会将分为多个分会场，每一个会场拥有独立的教室，拥有一个不同的主题，参与者可以根据自己的个人兴趣去参加其中一个或者多个，讨论持续两个小时，期间讨论的内容随意，最后选举出一名同学，总结谈论的内容，并在总会场中和大家分享讨论所得，其内容可以是开发心得、行业走向、科技前沿等。',
          ]}
          url={{
            link: '#',
            name: '点击报名'
          }}
        />
        <Participator
          title="参赛对象"
          subParts={[
            {
              title: {
                image: HackdayImage,
                alt: 'Hackday'
              },
              content: 'Unique Hackday面向于全国高校本科生，其中包括编程爱好者、产品经理、交互设计师及任何有技术基础的同学，在所有的报名者中筛选出最优秀的150名参赛者来参加比赛。'
            },
            {
              title: {
                image: TalkImage,
                alt: 'Talk'
              },
              content: '而Unique Talk 的报名，采取自愿参加的形式，面向有一定项目基础、创业经历的同学，除此之外还邀请全国各类高校技术组织，并在所有的报名者中筛选50名同学参加。'
            }
          ]}
        />
        <Schedule
          title='参赛时间'
          schedules={[
            {
              time: '6月3日',
              events: [
                {
                  time: '8:50',
                  description: '选手嘉宾入场'
                },
                {
                  time: '9:30',
                  description: '比赛开幕式'
                },
                {
                  time: '10:50',
                  description: '未组队选手组队'
                },
                {
                  time: '11:10',
                  description: '午餐'
                },
                {
                  time: '12:00',
                  description: '比赛正式开始'
                },
                {
                  time: '17:30',
                  description: '晚餐'
                },
                {
                  time: '17:30',
                  description: '晚餐'
                },
                {
                  time: '23:00',
                  description: '夜宵'
                },
              ]
            },
            {
              time: '6月4日',
              events: [
                {
                  time: '7:30',
                  description: '早餐'
                },
                {
                  time: '11:00',
                  description: '项目提交'
                },
                {
                  time: '12:00',
                  description: '比赛结束'
                },
                {
                  time: '12:00',
                  description: '午餐&休息'
                },
                {
                  time: '13:00',
                  description: '作品展示及评分'
                },
                {
                  time: '16:30',
                  description: '统计分数及颁奖'
                },
                {
                  time: '17:00',
                  description: '进行抽奖并致辞结束'
                },
              ]
            },
          ]}
        />
        <Detail
          title='详细规则'
          content='我也不知道详细规则有些什么东西'
        />
        <Map
          title='地址'
          description={{
            zh: '中国湖北省武汉市洪山区珞瑜路1037号华中科技大学启明学院',
            en: 'Qiming College of HUST, 1037-Luoyu-Road, Wuhan，430074, P.R.China'
          }}
        />
        <Prize
          title="奖项设置"
          prizes={[
            {
              name: '冠军',
              content: '20,000 元'
            },
            {
              name: '亚军',
              content: '10,000 元'
            },
            {
              name: '季军',
              content: '5,000 元'
            },
            {
              name: '最佳',
              content: '3,000 元'
            },
            {
              name: '最佳',
              content: '3,000 元'
            },
            {
              name: '最佳',
              content: '3,000 元'
            },
            {
              name: '企业',
              content: '由赞助企业设定'
            }
          ]}
        />
        <Questions
          title='常见问题'
          questions={[
            {
              name: '这里是问题',
              content: [
                'gugugugugugugugu',
                'gugugugugugugugugugugu'
              ]
            },
            {
              name: '这里是问题',
              content: [
                'gugugugugugugugu',
                'gugugugugugugugugugugu'
              ]
            },
            {
              name: '这里是问题',
              content: [
                'gugugugugugugugu',
                'gugugugugugugugugugugu'
              ]
            },
            {
              name: '这里是问题',
              content: [
                'gugugugugugugugu',
                'gugugugugugugugugugugu'
              ]
            },
            {
              name: '这里是问题',
              content: [
                'gugugugugugugugu',
                'gugugugugugugugugugugu'
              ]
            },
            {
              name: '这里是问题',
              content: [
                'gugugugugugugugu',
                'gugugugugugugugugugugu'
              ]
            },
            {
              name: '这里是问题',
              content: [
                'gugugugugugugugu',
                'gugugugugugugugugugugu'
              ]
            },
          ]}
        />
        <Hosts
          title="主办方"
        />
        <Sponsor
          title="赞助方"
        />
      </div>
    );
  }
}

export default mainContent;
