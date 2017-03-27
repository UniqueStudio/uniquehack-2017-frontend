import React, {Component} from 'react';
import Question from './question';
import './questions.css';

class Questions extends Component {
  render() {
    const questions = this.props.questions.map((question, index) => (
      <Question
        key={index}
        {...question}
      />
    ));
    return (
      <section
        id="questions"
        className="questions">
        <h2>{this.props.title}</h2>
        {questions}
      </section>
    );
  }
}

Questions.propTypes = {
  title: React.PropTypes.string,
  questions: React.PropTypes.array
};

export default Questions;
