import React, {Component} from 'react';
import './schedule.css';

class Schedule extends Component {
  render() {
    const schedules = this.props.schedules.map((schedule, index) => {
      const events = schedule.events.map((event, index) => (
        <div
          key={index}
          className="schedule-event">
          <p className="event-time">{event.time}</p>
          <p className="event-description">{event.description}</p>
        </div>
      ));
      return (
        <div
          key={index}
          className="single-day-schedule">
          <div className="schedule-time">
            <p>
              {schedule.time}
            </p>
          </div>
          {events}
          <div className="clear-float" />
        </div>
      );
    });
    return (
      <section
        id="schedule"
        className="schedule">
        <h2>{this.props.title}</h2>
        {schedules}
      </section>
    );
  }
}

Schedule.propTypes = {
  title: React.PropTypes.string,
  schedules: React.PropTypes.array
};

export default Schedule;
