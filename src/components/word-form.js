import React from 'react';
import './word-form.css';

export default class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render(){
    let nextBtn;
    if (this.props.nextBtn) {
      nextBtn = <button className='next-btn' onClick={() => this.props.handleNext()}>Next</button>;
    }
    let submitBtn;
    if (this.props.submitBtn) {
      submitBtn = <button className='answer-submit-btn' type="submit">Submit</button>;
    }



    return (
      <section className='word-section row'>
        <div className='col-12'>
          <div className='language'>
            <p>English</p>
          </div>
          <form className='word-form' onSubmit={this.handleSubmit}>
            <label>
              <input className='user-answer' type="text" value={this.state.value} onChange={this.handleChange}  />
            </label>
            { submitBtn }
            { nextBtn }
          </form>
        </div>
      </section>
    );
  }
}