import React from 'react';
import { connect } from 'react-redux';
import Word from './word';
import WordForm from './word-form';
import Feedback from './feedback';
import requiresLogin from './requires-login';
import './practice-page.css';
import { fetchWord, sendAnswer } from '../actions/words';

export class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGreeting: true,
      showSubmitBtn: true,
      showNextBtn: false,
      userAnswer: '',
      showFeedback: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchWord());
    this.setState({
      showNextBtn: false
    });
    window.setTimeout(()=>this.setState({showGreeting: false}), 5000);
  }

  handleSubmitBtn(answer) {
    this.props.dispatch(sendAnswer(answer));
    this.setState({
      showSubmitBtn:false,
      showNextBtn: true,
      userAnswer: answer,
      showFeedback: true
    });
  }

  handleNextBtn() {
    this.props.dispatch(fetchWord());
    this.setState({
      showNextBtn: false,
      showSubmitBtn: true,
      showFeedback: false
    });
  }

  render() {
    if (!this.props.word) {
      return <p>loading...</p>;
    }

    let greeting = <p></p>;
    if (this.state.showGreeting) {
      greeting = (<p className='welcome-text left'>Welcome, {this.props.name}</p>);
    }

    let feedback = '';
    if (this.state.showFeedback) {
      feedback = <Feedback feedback={this.props.feedback} userAnswer={this.state.userAnswer} />;
    }

    return (
      <main>
        <div className='row'>
          <div className='col-12 user-greeting'>
            {greeting}
          </div>
          <div className='col-12'>
            <h1 className='center'>Type in the English equivalent and submit</h1>
          </div>
          <div className='feedback-message col-12'>
            <div className='center'>
              {feedback}
            </div>
          </div>
          <div className='col-6'>
            <Word word={{ word: this.props.word, translit: this.props.translit }} />
          </div>
          <div className='col-6'>
            <WordForm handleSubmit={(answer) => this.handleSubmitBtn(answer)} submitBtn={this.state.showSubmitBtn} nextBtn={this.state.showNextBtn} handleNext={()=>this.handleNextBtn()}/>
          </div>
          <div className=' horizontal-divider center col-12'>
            <button className='resetBtn'>Reset</button>
            <button className='finishBtn'>Finish</button>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  const word = state.word.word;
  const feedback = state.word.feedback;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.name}`,
    word,
    feedback
  };
};

export default requiresLogin()(connect(mapStateToProps)(Practice));