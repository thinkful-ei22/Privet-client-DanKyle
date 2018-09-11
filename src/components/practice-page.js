import React from 'react';
import { connect } from 'react-redux';
import Word from './word';
import WordForm from './word-form';
import Feedback from './feedback';
import requiresLogin from './requires-login';
import './practice-page.css';
import { fetchWord, sendAnswer } from '../actions/words';

export class Practice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showGreeting: true,
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
    // window.setTimeout(()=>this.setState({showGreeting: false}), 10000);
  }

  handleUserAnswer(answer){
    console.log(answer);
    this.props.dispatch(sendAnswer(answer));
    this.setState({
      showNextBtn: true,
      userAnswer: answer,
      showFeedback: true
    });
  }

  handleNext(){
    console.log('next word will be shown!');
    this.props.dispatch(fetchWord());
    this.setState({
      showNextBtn: false,
      showFeedback: false
    });
  }

  render(){
    if(!this.props.word) {
      return <p>loading...</p>;
    }
    
    let greeting = <p></p>;
    if(this.state.showGreeting){
      greeting = (<p className='center'>Welcome, {this.props.name}</p>);
    }

    let nextBtn;
    if(this.state.showNextBtn){
      nextBtn = (<button onClick={()=>this.handleNext()}>Next</button>);
    }

    let feedback = '';
    if (this.state.showFeedback){
      feedback = <Feedback feedback={{ correct: false, answer: 'hello' }} userAnswer={this.state.userAnswer} />;
    }

    return (
      <main>
        <div className='row'>
          <div className='col-12 user-greeting'>
            { greeting }
          </div>
          <div className='col-12'>
            <h1>Type in the English equivalent of the word in Russian and submit</h1>
          </div>
          <div className='col-12'>
            <div className='feedback-message center'>
              {feedback}
            </div>
          </div>
          <div className='col-6'>
            <Word word={{ word: this.props.word || 'Привет', translit: this.props.translit || 'Pree-vyEt'}}/>
          </div>
          <div className='col-6'>
            <WordForm handleSubmit={(answer)=>this.handleUserAnswer(answer)}/>
          </div>
          <div>
            { nextBtn }
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  const word = state.word.word;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.name}`,
    word: word
  };
};

export default requiresLogin()(connect(mapStateToProps)(Practice));