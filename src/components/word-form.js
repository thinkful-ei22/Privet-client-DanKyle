import React from 'react';

export default class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

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
    return (
      <section className='word-section row'>
        <div className='col-12'>
          <div className='language'>
            <p>English</p>
          </div>
          <form className='word-form' onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange}  />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}