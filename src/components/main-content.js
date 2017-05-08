import React, {Component} from 'react';

import HackdayIntro from './main-contents/hackday-intro';
import Participator from './main-contents/participator';
import Schedule from './main-contents/schedule';
import Map from './main-contents/map';
import Prize from './main-contents/prize';
import Questions from './main-contents/questions';
import Hosts from './main-contents/hosts';
import './main-content.css';

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
            link: 'http://cn.mikecrm.com/hTp69AX',
            name: '点击报名'
          }}
        />
        <Participator
          title="参赛对象"
          contents={[
            'Unique Hackday面向于全国高校本科生',
            '其中包括编程爱好者、产品经理、交互设计师及任何有技术基础的同学',
            '在所有的报名者中筛选出最优秀的150名参赛者来参加比赛。'
          ]}
        />
        <Schedule
          title='时间安排'
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
              content: '12,000 元'
            },
            {
              name: '亚军',
              content: '7,500 元'
            },
            {
              name: '季军',
              content: '5,000 元'
            },
            {
              name: '最佳技术奖、最佳创意奖、最佳设计奖',
              content: '2,500 元'
            },
            {
              name: '还有更多企业特设奖等你参与',
              content: '~'
            }
          ]}
        />
        <Questions
          title='常见问题'
          questions={[
            {
              name: '我不在武汉，参与的交通费用怎么办？',
              content: [
                '对于不在武汉的选手，我们将按照选手所在地给予补助，持相应票据报销。免除后顾之忧！',
              ]
            },
            {
              name: 'Hackday 可以提前组队吗？',
              content: [
                '可以，我们鼓励大家提前组队，一个队伍由2~5名同学组成，没有组队也不要紧，我们现场会组织没有队伍的同学参赛。',
              ]
            },
            {
              name: '我需要带一些什么？',
              content: [
                '笔记本电脑，手机，充电器或者任何项目所需的设备。如果需要，你也可以携带枕头或者睡袋。请不要携带任何危险物品以防发生意外。'
              ]
            },
            {
              name: '如果有更多问题，我该向哪里寻求帮助？',
              content: [
                '可以发送邮件到 xuzhiming@hustunique.com',
                '或者加入我们的FAQ的qq群：636566271'
              ]
            },
          ]}
        />
        <Hosts
          title="主办方"
          hosts={[
            '华中科技大学联创团队',
            '华中科技大学创客空间',
            '华中科技大学启明学院'
          ]}
        />
      </div>
    );
  }
}

export default mainContent;
